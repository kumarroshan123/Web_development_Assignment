from django.db import models

# Create your models here.
class task(models.Model):
    title=models.CharField(max_length=50)
    description=models.TextField()
    completed=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    def __str__(self) -> str:
        return self.title