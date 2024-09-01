from django.db import models

# Create your models here.
class Author(models.Model):
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    birthdate=models.DateField()
    biography=models.TextField()

    class Meta:
        unique_together = ('first_name', 'last_name')

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"

class Book(models.Model):
    title=models.CharField(max_length=50)
    isbn=models.CharField(max_length=50,unique=True)
    publication_date=models.DateField()
    number_of_pages=models.IntegerField()
    author=models.ForeignKey(Author, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title

class Member(models.Model):
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    membership_date=models.DateField()
    email=models.EmailField(max_length=254,unique=True)
    class Meta:
        unique_together = ('first_name', 'last_name')

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"

class Loan(models.Model):
    book=models.ForeignKey(Book, on_delete=models.CASCADE)
    member=models.ForeignKey(Member, on_delete=models.CASCADE)
    loan_date=models.DateField()
    return_date=models.DateField(null=True)

    def __str__(self) -> str:
        return f"{self.book.title} loaned to {self.member.first_name} {self.member.last_name} on {self.loan_date}"

