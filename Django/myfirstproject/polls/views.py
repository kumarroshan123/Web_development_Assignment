from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hey there! Welcome to the polls app")

def home(request,questionid):
    return render(request,"polls/index.html",{"questionid": questionid })

# Create your views here.
