from django.shortcuts import render,redirect
from .forms import SignUpForm,UserUpdateForm,PostForm,CommentForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login,logout,update_session_auth_hash
from django.contrib.auth.decorators import  login_required
from django.contrib import messages
from django.shortcuts import get_object_or_404
from .models import Post,Comment

def homepage(request):
    return render(request,'posts/home.html')

def SignUpPage(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form=SignUpForm()
    return render(request,'posts/Signup.html',{'forms': form})
            

def LoginPage(request):
    if request.method == 'POST':
        form=  AuthenticationForm(data=request.POST)
        if form.is_valid():
            user=form.get_user()
            login(request,user)
            return redirect('profile')
    else:
        form=AuthenticationForm()
    return render(request,'posts/login.html',{'forms': form})

@login_required
def LogoutPage(request):
    if request.method == 'POST':
        logout(request)
        return redirect('home')
    return render(request,"posts/logout.html")

@login_required
def profile(request):
    return render(request,'posts/profile.html')

@login_required
def edit_profile(request):
    if request.method =='POST':
        form=UserUpdateForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            update_session_auth_hash(request, request.user)
            messages.success(request, 'Your profile was successfully updated!')
            return redirect('profile')
    else:
        form = UserUpdateForm(instance=request.user)
    return render(request,'posts/edit_profile.html',{'form': form})

@login_required
def post_list(request):
    posts = Post.objects.filter(author=request.user)
    return render(request, 'posts/post_list.html', {'posts': posts})

@login_required
def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect('post_list')
    else:
        form = PostForm()
    return render(request, 'posts/post_form.html', {'form': form})

@login_required
def edit_post(request, post_id):
    post = get_object_or_404(Post, id=post_id, author=request.user)
    if request.method == 'POST':
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            return redirect('post_list')
    else:
        form = PostForm(instance=post)
    return render(request, 'posts/post_form.html', {'form': form})

@login_required
def delete_post(request, post_id):
    post = get_object_or_404(Post, id=post_id, author=request.user)
    if request.method == 'POST':
        post.delete()
        return redirect('post_list')
    return render(request, 'posts/post_confirm_delete.html', {'post': post})

@login_required
def post_detail(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    comments = post.comments.all()
    
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.post = post
            comment.author = request.user
            comment.save()
            return redirect('post_detail', post_id=post.id)
    else:
        form = CommentForm()
    
    return render(request, 'posts/post_detail.html', {
        'post': post,
        'comments': comments,
        'form': form
    })
