from django.db import models

class Publisher(models.Model):
    name=models.CharField(max_length=100)
    address=models.CharField(max_length=250)
    city=models.CharField(max_length=100)
    state_province=models.CharField(max_length=100)
    country=models.CharField(max_length=50)
    website=models.URLField()

class book(models.Model):
    title=models.CharField(max_length=200)
    author=models.CharField(max_length=100)
    publication_date=models.DateField()
    isbn=models.CharField(max_length=13,unique=True)
    pages=models.IntegerField()
    cover=models.URLField(blank=True,null=True)
    language=models.CharField(max_length=50,default='English')
    publisher=models.ForeignKey(Publisher,on_delete=models.CASCADE,default="this is something")

