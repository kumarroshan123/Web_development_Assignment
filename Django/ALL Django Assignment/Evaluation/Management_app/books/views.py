from django.shortcuts import render
from django.http import HttpResponse
from .models import author, book
# Create your views here.
def authorlist(request):
    list_author=author.objects.all()
    return render(request,"books/author.html",{'list':list_author})

def booklist(request):
    book_list=book.objects.all()
    return render(request,"books/book.html",{'list2':book_list})