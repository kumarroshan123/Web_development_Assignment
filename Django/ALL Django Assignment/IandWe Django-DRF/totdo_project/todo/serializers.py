from rest_framework import serializers
from .models import task

class TaskSerializers(serializers.ModelSerializer):
    class Meta:
        model=task
        fields=['title','description','completed']
       

