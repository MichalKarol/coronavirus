from django.core.management.base import BaseCommand
from cases.models import Cases, HistoryCases, Updates
import requests
from bs4 import BeautifulSoup
import json
import datetime


class Command(BaseCommand):
    help = "Scraps data from https://www.gov.pl/web/koronawirus/wykaz-zarazen-koronawirusem-sars-cov-2"

    def handle(self, *args, **options):
        # Get page
        response = requests.get(
            "https://www.gov.pl/web/koronawirus/wykaz-zarazen-koronawirusem-sars-cov-2"
        )
        soup = BeautifulSoup(response.text, "html.parser")
        csv_data = json.loads(soup.find(id="registerData").string).get("data")
        lines = csv_data.split("\r\n")

        cases = []
        for line in lines:
            parts = line.split(";")
            if len(parts) == 4:
                if parts[0] in ["Cała Polska", "Województwo"]:
                    continue
                cases.append(
                    Cases(
                        wojewodztwo=parts[0],
                        powiat="",
                        sick=int(parts[1]) if parts[1] else 0,
                        deaths=int(parts[2]) if parts[2] else 0,
                    )
                )
        Cases.objects.all().delete()
        Cases.objects.bulk_create(cases)

        last_update = Updates.objects.order_by("-date").first()
        current_datetime = datetime.datetime.now()
        if (
            not last_update
            or last_update.date
            and last_update.date.date() < current_datetime.date()
        ):
            history_cases = []
            for case in cases:
                history_cases.append(
                    HistoryCases(
                        date=current_datetime,
                        wojewodztwo=case.wojewodztwo,
                        powiat=case.powiat,
                        sick=case.sick,
                        deaths=case.deaths,
                    )
                )
            HistoryCases.objects.bulk_create(history_cases)

        Updates.objects.create(date=current_datetime)
