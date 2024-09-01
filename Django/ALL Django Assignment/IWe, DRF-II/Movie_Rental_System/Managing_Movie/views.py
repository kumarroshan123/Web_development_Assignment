from django.shortcuts import render
from .serializers import MovieSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Movie
# Create your views here.
@api_view(['GET','POST'])
def showlist(request):
    if request.method == 'GET':
        movie= Movie.objects.all()
        serializer=MovieSerializer(movie,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer=MovieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
@api_view(['GET','POST','DELETE'])
def update_delete(request,pk):
    try:
        movie=Movie.objects.get(pk=pk)
    except Movie.DoesNotExist:
        return Response({"message": "Task doesn't Found"})
    if request.method == 'GET':
        serializer=MovieSerializer(movie)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer=MovieSerializer(movie,data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        movie.delete()
        return Response({"message": "Task has been deleted"})

   
            
