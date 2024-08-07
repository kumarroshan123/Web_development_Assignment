from django.urls import path
from . import views
urlpatterns = [
    path("",views.index,name="index"),
    path("<int:questionid>",views.home,name="Home"),
]
