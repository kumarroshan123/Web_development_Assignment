# Generated by Django 5.0.6 on 2024-08-11 22:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='car',
            old_name='dealership',
            new_name='manufacturer',
        ),
    ]