# Generated by Django 3.0.1 on 2020-10-01 21:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('audio', '0004_auto_20201002_0401'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='audiolist',
            name='uid',
        ),
    ]