from django.urls import path
from . import views

urlpatterns = [
    path("",views.home,name="home"),
    path("list1/<int:questionId>/",views.list,name="blog"),
    path("list2/<int:question>/",views.display,name="list"),
]
