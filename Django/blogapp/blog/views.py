from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer,PostSerializer,ProfileSerializer
from .models import Profile,Post
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
import jwt,datetime
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

        user= User.objects.filter(username=username).first()
        
        if user is None:
            return Response({'message':'User not Registered, Please Signup'},status=status.HTTP_404_NOT_FOUND)
        
        if not user.check_password(password):
            return Response({'message':'wrong password, Please try again'}, status=status.HTTP_400_BAD_REQUEST)
        login(request,user)
        #i will create a token here, where i will hide the information of logged in user
        payload={
            'id':user.id,
            'exp':datetime.datetime.now(datetime.UTC)+datetime.timedelta(minutes=60),
            'iat':datetime.datetime.now(datetime.UTC)

        }
        token=jwt.encode(payload,'cap1.4b',algorithm='HS256')
        response=Response()
        response.data={'message': 'login successful' , 'token':token}
        response.status = status.HTTP_200_OK
        response.set_cookie(
            key='jwt',
            value=token,
            httponly=False,
            samesite=None,
            secure=None
        )
        return response
        # return Response({'message':'Login successful','token':token}, status=status.HTTP_200_OK)


class PostView(APIView):
    def post(self,request):
        # token= request.COOKIES.get('jwt')
        # payload=jwt.decode(token,'cap1.4b',algorithms=['HS256'])
        # profile = Profile.objects.filter(user=payload['id']).first()
        # if profile.user_type != 'author':
        #     return Response({'message':"Unauthorized"}, status=status.HTTP_401_UNAUTHORIZED)
        
        # request.data['author'] = profile.id
        serializer=PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['author']=request.author #middleware 
            serializer.save()
            return Response({'message':'Post Added'}, status=status.HTTP_201_CREATED)
        return Response({'message':'Something Went Wrong'}, status=status.HTTP_400_BAD_REQUEST)

    def put(self,request,*args,**kwargs):
        # token= request.COOKIES.get('jwt')
        # payload=jwt.decode(token,'cap1.4b',algorithms=['HS256'])
        # profile = Profile.objects.filter(user=payload['id']).first()
        # if profile.user_type != 'author':
        #     return Response({'message':"Unauthorized"}, status=status.HTTP_401_UNAUTHORIZED)
        
        # request.data['author'] = profile.id
        post_id=kwargs.get('pk')
        post=Post.objects.get(id=post_id)
        serializer= PostSerializer(post, data=request.data,partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({'message':'Post Updated',"updated_post":serializer.data}, status=status.HTTP_200_OK)
        return Response({'message':'Something Went Wrong'}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,*args,**kwargs):
        # token= request.COOKIES.get('jwt')
        # payload=jwt.decode(token,'cap1.4b',algorithms=['HS256'])
        # profile = Profile.objects.filter(user=payload['id']).first()
        # if profile.user_type != 'author':
        #     return Response({'message':"Unauthorized"}, status=status.HTTP_401_UNAUTHORIZED)
        post_id=kwargs.get('pk')
        post=Post.objects.get(id=post_id)
        post.delete()
        return Response({'message':'Post Deleted',"deleted_post":PostSerializer(post).data}, status=status.HTTP_200_OK)
       