from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Profile(models.Model):
    user_roles=(('reader','Reader'),('author','Author'))
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    user_type= models.CharField(max_length=10,choices=user_roles)

    def __str__(self) -> str:
        return f'{self.user}-{self.user_type}'
    
# class Post(mo)