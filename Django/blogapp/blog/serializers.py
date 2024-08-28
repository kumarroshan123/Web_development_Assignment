from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile,Post

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=["id","username","password"]

        def created(self,validated_data):
            password=validated_data.pop('password',None)
            instance= self.Meta.Model(**validated_data)
            if password is not None:
                instance.set_password(password)
                instance.save()
                return instance


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Profile 
        fields='__all__'

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model= Post
        fields='__all__'
