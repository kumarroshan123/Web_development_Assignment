from django.shortcuts import render,redirect
from django.http import HttpResponse
from .forms import SignUpForm
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
# Create your views here.
def homepage(request):
    return render(request,'authn/index.html')

def sign_up(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request,user)
            return redirect('login')
    else:
        form = SignUpForm()

    return render(request,'authn/signup_t.html',{"form": form})

def log_in(request):
    return render(request,'authn/login.html')
        # return HttpResponse("You are in login page")
