from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def fn(request):
    context={
        'message':'Welcome To The Website',
    }
    return render(request,"main/index.html",context)