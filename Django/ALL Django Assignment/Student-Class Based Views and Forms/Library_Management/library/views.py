from django.shortcuts import render
from django.views.generic import ListView,DetailView,CreateView,UpdateView,DeleteView,FormView
from .models import Book
from .forms import BookForm
from django.urls import reverse_lazy

class BookListView(ListView):
    model=Book
    template_name='library/book_list.html'
    context_object_name='book'

class BookDetailView(DetailView):
    model=Book
    template_name="library/book_detail.html"
    context_object_name='book'

class BookCreateView(CreateView):
    model=Book
    template_name="library/book_form.html"
    fields=['title','author','published_date','isbn','pages','cover']
    success_url='/books/'

class BookUpdateView(UpdateView):
    model=Book
    template_name="library/book_form.html"
    fields=['title','author','published_date','isbn','pages','cover']
    success_url='/books/'
    context_object_name='book'

class BookDeleteView(DeleteView):
    model=Book
    template_name="library/book_confirm_delete.html"
    fields=['title','author','published_date','isbn','pages','cover']
    success_url='/books/'


class BookFormView(FormView):
    template_name = 'library/book_custom_form.html'
    form_class = BookForm
    success_url = reverse_lazy('book_success')

def success_page(request):
    return render(request,'library/success.html')