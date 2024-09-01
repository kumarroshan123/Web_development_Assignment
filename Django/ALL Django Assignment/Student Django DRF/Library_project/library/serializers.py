from rest_framework import serializers
from .models import Author,Book,Member,Loan

class AuthorSerializers1(serializers.ModelSerializer):
    class Meta:
        model=Author
        fields= ['first_name', 'last_name']

class BookSerializers(serializers.ModelSerializer):
    author = AuthorSerializers1(read_only=True)
    class Meta:
        model=Book
        fields="__all__"

class AuthorSerializers(serializers.ModelSerializer):
    books = BookSerializers(many=True, read_only=True)
    class Meta:
        model=Author
        fields="__all__"


class MemberSerializers(serializers.ModelSerializer):
    Book = BookSerializers(many=True,read_only=True)
    class Meta:
        model=Member
        fields="__all__"

class BookSerializers1(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields= ['title']

class LoanSerializers(serializers.ModelSerializer):
    books = BookSerializers1(read_only=True)
    member = MemberSerializers(read_only=True)
    class Meta:
        model=Loan
        fields="__all__"
