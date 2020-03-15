from django.db import models


class Updates(models.Model):
    date = models.DateTimeField()


class Cases(models.Model):
    wojewodztwo = models.CharField(max_length=150)
    powiat = models.CharField(max_length=150)
    sick = models.IntegerField()
    deaths = models.IntegerField()


class HistoryCases(models.Model):
    date = models.DateTimeField()
    wojewodztwo = models.CharField(max_length=150)
    powiat = models.CharField(max_length=150)
    sick = models.IntegerField()
    deaths = models.IntegerField()
