from rest_framework import serializers
from .models import Car,Manufacturer,Dealership

class ManufacturerSerializers(serializers.ModelSerializer):
    class Meta:
         model=Manufacturer
         fields="__all__"


class CarSerializers(serializers.ModelSerializer):
     manufacturer=ManufacturerSerializers()

     class Meta:
          model=Car
          fields="__all__"

class DealershipSerializers(serializers.ModelSerializer):
     class Meta:
          model=Dealership
          fields="__all__"