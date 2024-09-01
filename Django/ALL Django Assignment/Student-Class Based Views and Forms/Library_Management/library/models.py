from django.db import models

# Create your models here.
class Book(models.Model):
    title=models.CharField(max_length=100)
    author=models.CharField(max_length=200)
    published_date=models.DateField()
    isbn=models.CharField(max_length=100, unique=True)
    pages=models.IntegerField()
    cover=models.URLField(max_length=200,null=True)

    def __str__(self) -> str:
        return self.title
    