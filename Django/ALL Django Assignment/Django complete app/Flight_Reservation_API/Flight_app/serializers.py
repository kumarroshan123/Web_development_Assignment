from rest_framework import serializers
from .models import Flight,Reservation,Passenger

class flightSerializer(serializers.ModelSerializer):
    class Meta:
        model=Flight
        fields="__all__"

class PassengerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Passenger
        fields="__all__"

class ReservationSerializer(serializers.ModelSerializer):
    flight=flightSerializer()
    passenger=PassengerSerializer()
    class Meta:
        model=Reservation
        fields="__all__"


