from django.urls import path
from .import views

urlpatterns = [
    path('list/',views.get_all_tasks,name='alltask'),
    path('edit/<int:pk>/',views.edit_delete_task,name="editdelete")
]
