from django.contrib import admin
from .models import UserProfile,Book,Review
# Register your models here.
admin.site.register(UserProfile)
admin.site.register(Book)
admin.site.register(Review)
