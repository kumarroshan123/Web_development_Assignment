# models.py
from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    books = models.ManyToManyField('Book', related_name='authors_list', blank=True)

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=200)
    publication_date = models.DateField()
    authors = models.ManyToManyField(Author, related_name='books_list', blank=True)

    def __str__(self):
        return self.title
