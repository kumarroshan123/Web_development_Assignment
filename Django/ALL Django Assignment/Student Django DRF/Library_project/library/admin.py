from django.contrib import admin
from .models import Author,Book,Loan,Member
# Register your models here.
admin.site.register(Author)
admin.site.register(Book)
admin.site.register(Member)
admin.site.register(Loan)