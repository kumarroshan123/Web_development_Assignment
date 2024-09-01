from django.urls import path
from . import  views

urlpatterns = [
    path('home/',views.homepage,name="home"),
    path('signup/',views.SignUpPage,name="signup"),
    path('login/',views.LoginPage,name="login"),
    path('logout/',views.LogoutPage,name="logout"),
    path('profile/', views.profile, name='profile'),
    path('profile/edit/', views.edit_profile, name='edit_profile'),
    path('posts/', views.post_list, name='post_list'),
    path('posts/new/', views.create_post, name='create_post'),
    path('posts/<int:post_id>/edit/', views.edit_post, name='edit_post'),
    path('posts/<int:post_id>/delete/', views.delete_post, name='delete_post'),
    path('post/<int:post_id>/', views.post_detail, name='post_detail'),
]
