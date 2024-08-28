from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile,Post

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["id","username","password"]


class ProfileSerializer(serializer.ModelSerializer):
    class Meta:
        model=Profile 
        fields='__all__'

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model= Post
        fields='__all__'
