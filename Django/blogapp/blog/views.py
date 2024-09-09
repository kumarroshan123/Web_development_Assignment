from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer,PostSerializer,ProfileSerializer
from .models import Profile,Post
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
import jwt,datetime,django_filters
from django_filters.rest_framework import DjangoFilterBackend,OrderingFilter
from rest_framework.pagination import PageNumberPagination
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse

# Create your views here.
class PasswordResetRequestView(APIView):
    def post(self, request):
        email=request.data['email']
        user= User.objects.get(email=email)

        if not user:
            return Response({'message':'User not registered, please signup'})
        
        refresh = RefreshToken.for_user(user)
        token = str(refresh.access_token)
        current_site = get_current_site(request)
        mail_subject = 'Reset Password'
        email_from = settings.EMAIL_HOST_USER
        message = render_to_string('password_reset_email.html', {'user': user, 'domain':current_site, 'token':token})
        send_mail(mail_subject,message,email_from,[email])
        return HttpResponse('Email sent successfully')


class PasswordResetConfirmView(APIView):
    def post(self, request):
        token = request.query_params.get('token')

        if not token:
            return Response({'message':"Invalid token, Please use Reset Password again"})
        
        access_token = AccessToken(token)
        user_id = access_token['user_id']
        user = User.objects.get(id=user_id)

        

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
    def get(self,request):
        posts=Post.objects.all()
        serializer=PostSerializer(posts,many=True)
        return Response({'message':"Here is the list of posts",'data':serializer.data},status=status.HTTP_200_OK)

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
       
class PostFilter(django_filters.FilterSet):
    author = django_filters.CharFilter(field_name='author__user__username', lookup_expr= 'iexact')
    title= django_filters.CharFilter(field_name='title',lookup_expr='icontains')
    class Meta:
        fields=['author','title']

class CustomPagination(PageNumberPagination):
    page_size=2

class PostListView(generics.ListAPIView):
    queryset= Post.objects.all().select_related('author').prefetch_related('author__user')
    serializer_class=PostSerializer
    filter_backends= [DjangoFilterBackend,OrderingFilter]
    filterset_fields=['author','title','published']
    # ordering_fields=['created_at','updated_at']
    filter_set=PostFilter
    pagination_class=CustomPagination
