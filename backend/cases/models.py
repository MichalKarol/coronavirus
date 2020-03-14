from django.db import models


class Updates(models.Model):
    date = models.DateTimeField()


class Cases(models.Model):
    powiat = models.CharField(max_length=150, primary_key=True)
    sick = models.IntegerField()
    deaths = models.IntegerField()


class HistoryCases(models.Model):
    date = models.DateTimeField()
    powiat = models.CharField(max_length=150)
    sick = models.IntegerField()
    deaths = models.IntegerField()
