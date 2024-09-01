from django.db import models

# Create your models here.
class Movie(models.Model):
    title=models.CharField( max_length=50)
    director=models.CharField( max_length=50)
    release_date=models.DateField()
    genre=models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.title