# Generated by Django 3.0.4 on 2020-03-14 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cases', '0002_auto_20200314_1422'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historycases',
            name='date',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='updates',
            name='date',
            field=models.DateTimeField(),
        ),
    ]