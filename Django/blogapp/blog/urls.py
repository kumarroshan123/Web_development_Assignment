from django.urls import path 
from .views import RegisterView,LoginView,PostView,PostListView,PasswordResetRequestView,PasswordResetConfirmView

urlpatterns = [
    path('resetpassword/',PasswordResetRequestView.as_view(),name='reset_password'),
    path('password_reset_confirm/',PasswordResetConfirmView.as_view(),name='password_reset_confirm'),
    path('register/',RegisterView.as_view(),name='register'),
    path('login/',LoginView.as_view(),name='login'),
    path('posts/',PostView.as_view(),name='Post'),
    path('posts/<int:pk>',PostView.as_view(),name='Post_edit_delete'),
    path('posts/all/',PostListView.as_view(),name='Post_List'),
]
