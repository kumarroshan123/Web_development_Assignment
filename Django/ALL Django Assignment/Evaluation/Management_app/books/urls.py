from django.urls import path
from . import views

urlpatterns = [
    path("",views.authorlist,name="author"),
    path("book/",views.booklist,name="book_list")

]
