from django.urls import path
from . import views

urlpatterns = [
    path('list/',views.showlist,name='list'),
    path('list/<int:pk>/',views.update_delete,name='Update'),
    
]
