# from django.shortcuts import render
from django.conf.urls import url, include
from rest_framework import routers, serializers, viewsets
from cases.models import HistoryCases, Cases, Updates
from django.http import JsonResponse


# Create your views here.


class HistoryCasesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = HistoryCases
        fields = ["date", "powiat", "sick", "deaths"]


class HistoryCasesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HistoryCases.objects.all()
    serializer_class = HistoryCasesSerializer


def CasesViewSet(request):
    return JsonResponse(
        {
            "updated": Updates.objects.order_by("-date").first().date,
            "cases": list(Cases.objects.all().values("powiat", "sick", "deaths")),
        }
    )
