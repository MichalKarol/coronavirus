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

        for line in lines[1:-1]:
            parts = line.split(";")
            if len(parts) == 5:
                Cases.objects.update_or_create(
                    powiat=parts[1],
                    defaults={
                        "sick": int(parts[2]) if parts[2] else 0,
                        "deaths": int(parts[3]) if parts[3] else 0,
                    },
                )

        last_update = Updates.objects.order_by("-date").first()
        current_datetime = datetime.datetime.now()
        if (
            not last_update
            or last_update.date
            and last_update.date.date() < current_datetime.date()
        ):
            history_cases = []
            for line in lines[1:-1]:
                parts = line.split(";")
                if len(parts) == 5:
                    history_cases.append(
                        HistoryCases(
                            date=current_datetime,
                            powiat=parts[1],
                            sick=int(parts[2]) if parts[2] else 0,
                            deaths=int(parts[3]) if parts[3] else 0,
                        )
                    )
            HistoryCases.objects.bulk_create(history_cases)

        Updates.objects.create(date=current_datetime)
