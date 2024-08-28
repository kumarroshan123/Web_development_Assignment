from django.shortcuts import render
from rest_framework import viewsets
from .models import Book,Review
from .serializers import BookSerializer,ReviewSerializer
# Create your views here.

class BookViewSet(viewsets.ModelViewSet):
    queryset= Book.objects.all()
    serializer_class=BookSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset= Review.objects.all()
    serializer_class=ReviewSerializer

    #Function to save the user correctly every time the user review is created 
    def perform_create(self,serializer):
        serializer.save(user=self.request.user)