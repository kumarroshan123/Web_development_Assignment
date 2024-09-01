from django.shortcuts import render
from .models import blog
from django.views.generic import ListView,CreateView,UpdateView,DeleteView
# Create your views here.
class Blog_List(ListView):
    model = blog
    template_name = "blog_list.html"
    context_object_name='blog'

class Create_blog_list(CreateView):
    model=blog
    template_name="blog/create_blog.html"
    fields=['title','content']
    success_url='/blog/list/'

class Update_blog(UpdateView):
    model=blog
    template_name="blog/create_blog.html"
    fields=['title','content']
    success_url='/blog/list/'

class Delete_blog(DeleteView):
    model=blog
    template_name="blog/delete_post.html"
    fields=['title','content']
    success_url='/blog/list/'