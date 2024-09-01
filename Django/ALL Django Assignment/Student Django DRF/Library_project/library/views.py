from django.shortcuts import render
from .serializers import AuthorSerializers,BookSerializers,MemberSerializers,LoanSerializers
from rest_framework import generics,filters
from .models import Author,Book,Member,Loan
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination

class Custompage(PageNumberPagination):
    page_size=2

class displayauthor(generics.ListCreateAPIView):
    queryset=Author.objects.all()
    serializer_class=AuthorSerializers
    pagination_class= Custompage
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']

class updatedeleteauthor(generics.RetrieveUpdateDestroyAPIView):
    queryset=Author.objects.all()
    serializer_class=AuthorSerializers

class displaybook(generics.ListCreateAPIView):
    queryset=Book.objects.all()
    serializer_class=BookSerializers
    pagination_class= Custompage
    filter_backends = [filters.SearchFilter]
    search_fields = ['title']
    

class updatedeletebook(generics.RetrieveUpdateDestroyAPIView):
    queryset=Book.objects.all()
    serializer_class=BookSerializers

class displayMember(generics.ListCreateAPIView):
    queryset=Member.objects.all()
    serializer_class=MemberSerializers
    pagination_class= Custompage

class updatedeletemember(generics.RetrieveUpdateDestroyAPIView):
    queryset=Member.objects.all()
    serializer_class=MemberSerializers

class BooksByAuthor(generics.ListAPIView):
    serializer_class = BookSerializers
    pagination_class= Custompage

    def get_queryset(self):
        author_id = self.kwargs['author_id']
        return Book.objects.filter(author_id=author_id)

class LoansByMember(generics.ListAPIView):
    serializer_class= LoanSerializers
    pagination_class= Custompage

    def get_queryset(self):
        member_id= self.kwargs['member_id']
        return Loan.objects.filter(member_id=member_id)
    
