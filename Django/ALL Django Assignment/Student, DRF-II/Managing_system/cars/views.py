from django.shortcuts import render
from .serializers import CarSerializers,ManufacturerSerializers,DealershipSerializers
from .models import Car,Manufacturer,Dealership
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework import filters
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated

class CustomPagination(PageNumberPagination):
    page_size=2



@api_view(['GET','POST'])
def displayCreateCar(request):
    if  request.method == 'GET':
        car=Car.objects.all()
        serializer=CarSerializers(car,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer=CarSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['GET','POST','DELETE'])

def Update_DeleteCar(request,pk):
    try :
        car=Car.objects.get(pk=pk)
    except car.DoesNotExist:
        return Response({"message": "Task doesn't Found"})
    if  request.method == 'GET':
        serializer=CarSerializers(car)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer=CarSerializers(car,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        car.delete()
        return Response({"message" : "This task is deleted"} )
    
@api_view(['GET', 'POST'])
def displayCreateManufacturer(request):
    if request.method == 'GET':
        manufacturers = Manufacturer.objects.all()
        serializer = ManufacturerSerializers(manufacturers, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ManufacturerSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['GET', 'POST', 'DELETE'])
def Update_DeleteManufacturer(request, pk):
    try:
        manufacturer = Manufacturer.objects.get(pk=pk)
    except Manufacturer.DoesNotExist:
        return Response({"message": "Manufacturer not found"}, status=404)

    if request.method == 'GET':
        serializer = ManufacturerSerializers(manufacturer)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ManufacturerSerializers(manufacturer, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        manufacturer.delete()
        return Response({"message": "Manufacturer has been deleted"})
    
@api_view(['GET', 'POST'])
def displayCreateDealership(request):
    if request.method == 'GET':
        dealerships = Dealership.objects.all()
        serializer = DealershipSerializers(dealerships, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DealershipSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['GET', 'POST', 'DELETE'])
def Update_DeleteDealership(request, pk):
    try:
        dealership = Dealership.objects.get(pk=pk)
    except Dealership.DoesNotExist:
        return Response({"message": "Dealership not found"}, status=404)

    if request.method == 'GET':
        serializer = DealershipSerializers(dealership)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DealershipSerializers(dealership, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        dealership.delete()
        return Response({"message": "Dealership has been deleted"})
    
class CrudCar1(viewsets.ModelViewSet):
        queryset=Car.objects.all()
        serializer_class=CarSerializers
        pagination_class=CustomPagination
        filter_backends=[filters.SearchFilter,filters.OrderingFilter]
        search_fields = ['year', 'model_name','price','manufacturer']
        ordering_fields=['year', 'model_name','price','manufacturer']
        ordering=['model_name']
        authentication_classes=[BasicAuthentication]
        permission_classes=[IsAuthenticated]

class Crudmanufacturer(viewsets.ModelViewSet):
        queryset=Manufacturer.objects.all()
        serializer_class=ManufacturerSerializers
        pagination_class=CustomPagination
        filter_backends=[filters.SearchFilter,filters.OrderingFilter]
        search_fields = ['name','country','date']
        ordering_fields=['name','country','date']
        ordering=['name']
        authentication_classes=[BasicAuthentication]
        permission_classes=[IsAuthenticated]

class CrudDealer(viewsets.ModelViewSet):
        queryset=Dealership.objects.all()
        serializer_class=DealershipSerializers
        pagination_class=CustomPagination
        filter_backends=[filters.SearchFilter,filters.OrderingFilter]
        search_fields = ['name','country','contact']
        ordering_fields=['name','country','contact']
        ordering=['name']
        authentication_classes=[BasicAuthentication]
        permission_classes=[IsAuthenticated]

