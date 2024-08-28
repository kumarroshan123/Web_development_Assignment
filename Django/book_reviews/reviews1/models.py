from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    bio=models.TextField(max_length=500,blank=True)

    def __str__(self) -> str:
        return self.user.username
    
class Book(models.Model):
    title=models.CharField(max_length=200)
    author=models.CharField(max_length=100)
    summary=models.TextField()

    def __str__(self) -> str:
        return f"{self.title} by {self.author}"
    
class Review(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    book=models.ForeignKey(Book, on_delete=models.CASCADE)
    rating =models.IntegerField()
    comment= models.TextField()

    def __str__(self) -> str:
        return f"Review by {self.user.username} for {self.book.title}"