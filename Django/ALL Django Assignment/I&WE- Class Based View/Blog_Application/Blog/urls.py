from django.urls import path
from . import views
urlpatterns = [
    path("list/",views.Blog_List.as_view(),name="blog_list"),
    path("create/",views.Create_blog_list.as_view(),name="Create_Blog_list"),
    path("Update/<int:pk>/",views.Update_blog.as_view(),name="Update_blog"),
    path("Delete/<int:pk>/",views.Delete_blog.as_view(),name="Delete_blog"),
]
