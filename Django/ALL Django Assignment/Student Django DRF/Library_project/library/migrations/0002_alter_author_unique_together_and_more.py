# Generated by Django 5.0.6 on 2024-08-10 19:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='author',
            unique_together={('first_name', 'last_name')},
        ),
        migrations.AlterUniqueTogether(
            name='member',
            unique_together={('first_name', 'last_name')},
        ),
    ]