from django.urls import path
from . import views

urlpatterns = [
    path("",views.movielist,name="movielist"),
    path("<int:id>/",views.display,name="moviedetails"),
]
