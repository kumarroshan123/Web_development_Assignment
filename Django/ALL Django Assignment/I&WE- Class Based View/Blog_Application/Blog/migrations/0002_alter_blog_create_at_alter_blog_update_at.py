# Generated by Django 5.0.6 on 2024-08-05 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='create_at',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='blog',
            name='update_at',
            field=models.DateField(auto_now=True),
        ),
    ]