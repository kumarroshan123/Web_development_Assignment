from django.contrib import admin
from .models import blog
# Register your models here.

class blogAdmin(admin.ModelAdmin):
    search_fields=['title','content']
    list_display=['title','content']
    list_filter=['title']


admin.site.register(blog,blogAdmin)