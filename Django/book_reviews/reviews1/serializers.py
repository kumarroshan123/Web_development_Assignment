from rest_framework import serializers
from django.contrib.auth.models import User
from reviews1.models import UserProfile,Book,Review

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','username','email']

class UserProfileSerializer(serializers.ModelSerializer):
    user=UserSerializer()

    class Meta:
        model=UserProfile
        fields=['user','bio']

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields= ['id','title','author','summary']

class ReviewSerializer(serializers.ModelSerializer):
    user=serializers.ReadOnlyField(source='user.username')
    book=serializers.ReadOnlyField(source='book.title')

    class Meta:
        model=Review
        fields =['id','book','user','rating','comment']

