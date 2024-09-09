from django.urls import path 
from .views import RegisterView,LoginView,PostView,PostListView,PasswordResetRequestView

urlpatterns = [
    path('resetpassword/',PasswordResetRequestView.as_view(),name='reset_password'),
    path('register/',RegisterView.as_view(),name='register'),
    path('login/',LoginView.as_view(),name='login'),
    path('posts/',PostView.as_view(),name='Post'),
    path('posts/<int:pk>',PostView.as_view(),name='Post_edit_delete'),
    path('posts/all/',PostListView.as_view(),name='Post_List'),
]
