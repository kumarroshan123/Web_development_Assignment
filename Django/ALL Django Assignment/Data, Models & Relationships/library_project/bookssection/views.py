from django.shortcuts import render
from . import models

def list(request):
    list1=models.book.objects.all()
    return render(request,"bookssection/books_list.html",{"books": list1})

