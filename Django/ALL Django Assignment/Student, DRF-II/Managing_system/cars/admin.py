from django.contrib import admin
from .models import Car,Manufacturer,Dealership
# Register your models here.
admin.site.register(Car)
admin.site.register(Manufacturer)
admin.site.register(Dealership)