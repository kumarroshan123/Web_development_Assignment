from django.db import models

# Create your models here.
class blog(models.Model):
    title=models.CharField(max_length=50)
    content=models.TextField()
    create_at=models.DateField(auto_now_add=True)
    update_at=models.DateField(auto_now=True)
    def __str__(self) -> str:
        return self.title