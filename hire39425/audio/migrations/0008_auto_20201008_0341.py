# Generated by Django 3.0.1 on 2020-10-07 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('audio', '0007_audiolist_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='audiolist',
            name='duration',
            field=models.IntegerField(max_length=8, null=True, verbose_name='时长'),
        ),
        migrations.AddField(
            model_name='audiolist',
            name='file_size',
            field=models.FloatField(default=0, max_length=12, null=True, verbose_name='文件大小'),
        ),
    ]
