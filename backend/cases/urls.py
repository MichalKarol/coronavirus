from django.conf.urls import url, include
from django.urls import path
from rest_framework import routers, serializers, viewsets
from cases.views import HistoryCasesViewSet, CasesViewSet


router = routers.DefaultRouter()
router.register(r"^api/history", HistoryCasesViewSet)

urlpatterns = [url(r"^", include(router.urls)), path(r"api/cases", CasesViewSet)]
