from django.shortcuts import render
from rest_framework import viewsets
from .models import Flight,Passenger,Reservation
from .serializers import flightSerializer,PassengerSerializer,ReservationSerializer
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class CustomPagination(PageNumberPagination):
    page_size=2

class CRUD_Flight(viewsets.ModelViewSet):
    queryset=Flight.objects.all()
    serializer_class=flightSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['flight_number', 'operating_airlines', 'departure_city', 'arrival_city']
    ordering_fields = ['flight_number', 'operating_airlines', 'departure_city', 'arrival_city', 'datetime_of_departure']
    ordering = ['flight_number']
    pagination_class=CustomPagination
    authentication_classes=[BasicAuthentication]
    permission_classes=[IsAuthenticated]

class CRUD_Passenger(viewsets.ModelViewSet):
    queryset=Passenger.objects.all()
    serializer_class=PassengerSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['first_name', 'middle_name', 'last_name', 'email', 'phone']
    ordering_fields = ['first_name', 'last_name', 'email', 'phone']
    ordering = ['last_name']
    pagination_class=CustomPagination
    authentication_classes=[BasicAuthentication]
    permission_classes=[IsAuthenticated]

class CRUD_Reservation(viewsets.ModelViewSet):
    queryset=Reservation.objects.all()
    serializer_class=ReservationSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['flight__flight_number', 'passenger__first_name', 'passenger__last_name']
    ordering_fields = ['flight__flight_number', 'passenger__first_name', 'passenger__last_name']
    ordering = ['flight__flight_number']
    pagination_class=CustomPagination
    authentication_classes=[BasicAuthentication]
    permission_classes=[IsAuthenticated]