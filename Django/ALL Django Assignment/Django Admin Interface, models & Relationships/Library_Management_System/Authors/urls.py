from django.urls import path
from django.views import View
from .import views

urlpatterns = [
    path("",views.authorlist.as_view(),name='Author_list'),
    path("<int:id>/",views.author_details,name ='Author_details'),
]
