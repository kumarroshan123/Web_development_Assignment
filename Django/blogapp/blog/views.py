from django.shortcuts import render
from rest_framework.views import APIView,Response
from rest_framework import status
from .serializers import UserSerializer,PostSerializer,ProfileSerializer
from .models import Profile
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
# Create your views here.

class  RegisterView(APIView):

    def post(self,request):
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            user=serializer.save()
            profile=Profile(user=user,user_type= request.data.get('user_type'))
            profile.save()
            return Response({'message':"Signup Successful", 'user_details': serializer.data}, status=status.HTTP_201_CREATED)
        return Response({'message':"Invalid Credentials"}, status=status.HTTP_406_NOT_ACCEPTABLE)


class LoginView(APIView):
    def post(self,request):
        username= request.data.get('username')
        password= request.data.get('password')

        user= User.objects.filter(username=username)
        
        if user is None:
            return Response({'message':'User not Registered, Please Signup'},status=status.HTTP_404_NOT_FOUND)
        
        if not user.check_password(password):
            return Response({'message':'wrong password, Please try again'}, status=status.HTTP_400_BAD_REQUEST)
        
        login(request,user)
        return Response({'message':'Login successful'}, status=status.HTTP_200_OK)


