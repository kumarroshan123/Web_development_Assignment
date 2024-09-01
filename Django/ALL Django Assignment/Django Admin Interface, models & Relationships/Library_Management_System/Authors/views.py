from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView
from .models import Author,Book
# Create your views here.

class  authorlist(ListView):
    model = Author
    template_name='author/author.html'
    context_object_name='list'
    def get_queryset(self):
        return Author.objects.prefetch_related('books').all()
    
def author_details(request,id):
    list1=get_object_or_404(Author.objects.prefetch_related('books_list'), id=id)
    return render(request,"author/author_detail.html",{'author':list1})
