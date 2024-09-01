from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
    return HttpResponse("This is List of blog Post")

def list(request, questionId):
    return HttpResponse(f"The Blog number {questionId}"  )

def display(request,question):
    return render(request,"blog/index.html",{"questionId":question})