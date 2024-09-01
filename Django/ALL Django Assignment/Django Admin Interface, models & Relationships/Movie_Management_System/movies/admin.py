from django.contrib import admin
from .models import hero_detail,movie_detail
# Register your models here.
admin.site.register(hero_detail)
admin.site.register(movie_detail)