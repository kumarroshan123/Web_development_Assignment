from django.urls import path
from .import views
urlpatterns = [
    path('',views.homepage,name='homepage'),
    path('signup/',views.sign_up,name="signuppage"),
    path('login/',views.log_in,name="login"),
]
