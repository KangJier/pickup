# Generated by Django 3.0.1 on 2020-10-01 20:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('device', '0008_auto_20201002_0401'),
        ('audio', '0003_auto_20200928_0006'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Audio',
            new_name='AudioList',
        ),
    ]