from django.contrib import admin
from .models import Author, Book

class BookInline(admin.TabularInline):
    model = Author.books_list.through
    extra=0

class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name', 'date_of_birth')
    search_fields = ('name',)
    inlines = [BookInline]

class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'publication_date')
    search_fields = ('title',)
    inlines = [BookInline]

admin.site.register(Author, AuthorAdmin)
admin.site.register(Book, BookAdmin)
