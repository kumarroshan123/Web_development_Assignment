from django.shortcuts import render,get_object_or_404
from .models import movie_detail,hero_detail
# Create your views here.
def movielist(request):
    movie_list=movie_detail.objects.all()
    print(movie_list)
    return render(request,"movies/index.html",{"list":movie_list})

def display(request,id):
    movie = get_object_or_404(movie_detail, id=id)
    return render(request, "movies/movie.html", {"moviedetails": movie})