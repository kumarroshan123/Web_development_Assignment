from django.shortcuts import render
from rest_framework.views import APIView,Response
from rest_framework import status
from .serializers import UserSerializer,PostSerializer,ProfileSerializer
from .models import Profile
# Create your views here.

class  RegisterView(APIView):

    def post(self,request):
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            user=serializer.save()
            profile=Profile(user=user,user_type= request.data.get('user_type'))
            profile.save()
            return Response({'message':"Signup Successful"}, status=status.HTTP_201_CREATED)
        return Response({'message':"Invalid Credentials"}, status=status.HTTP_406_NOT_ACCEPTABLE)