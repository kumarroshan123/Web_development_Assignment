from typing import Any
from django.db import models

# Create your models here.

class hero_detail(models.Model):
    name=models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return self.name

class movie_detail(models.Model):
    title=models.CharField(max_length=50)
    director=models.CharField(max_length=50)
    release_date=models.DateField()
    duration = models.IntegerField()
    description = models.TextField()
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    hero=models.ForeignKey(hero_detail,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title