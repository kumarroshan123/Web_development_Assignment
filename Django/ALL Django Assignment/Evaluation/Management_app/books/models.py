from django.db import models

class author(models.Model):
    name=models.CharField(max_length=50)
    birthdate=models.DateField()
    biography=models.TextField()
    
    def __str__(self) -> str:
        return self.name 

class book(models.Model):
    title=models.CharField(max_length=50)
    author=models.ForeignKey(author,on_delete=models.CASCADE)
    published_date=models.DateField()
    isbn=models.CharField(max_length=50)
    price=models.DecimalField(max_digits=5, decimal_places=2)
    stock=models.IntegerField()

    def __str__(self) -> str:
        return self.title
    
class country(models.Model):
    name=models.CharField(max_length=50)
    code=models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name