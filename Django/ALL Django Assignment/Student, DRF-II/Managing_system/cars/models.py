from django.db import models

class Manufacturer(models.Model):
    name=models.CharField(max_length=50)
    country=models.CharField(max_length=50)
    date=models.DateField()

    def __str__(self) -> str:
        return self.name

class Car(models.Model):
    model_name=models.CharField(max_length=50)
    year=models.DateField()
    price=models.IntegerField()
    manufacturer=models.ForeignKey(Manufacturer, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.model_name

class Dealership(models.Model):
    name=models.CharField(max_length=50)
    country=models.CharField(max_length=50)
    contact=models.IntegerField()

    def __str__(self) -> str:
        return self.name