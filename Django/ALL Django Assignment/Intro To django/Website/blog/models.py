from django.db import models
class post(models.Model):
    title=models.CharField(max_length=200)
    content=models.CharField(max_length=200)
    pub_date=models.DateTimeField(auto_now_add=True)


