from django.shortcuts import render
from .models import task
from .serializers import TaskSerializers
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['GET','POST'])
def get_all_tasks(request):
    if request.method == 'GET':
        tasks=task.objects.all()
        serializer=TaskSerializers(tasks,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer=TaskSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
@api_view(['PUT','GET','DELETE'])
def edit_delete_task(request,pk):
    try:
        tasks=task.objects.get(pk=pk)
    except task.DoesNotExist:
        return Response({"message": "Task doesn't Found"})
    if request.method == 'GET':
        serializer=TaskSerializers(tasks)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer =TaskSerializers(tasks,data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        tasks.delete()
        return Response({"message": "Task deleted"})
    return Response(serializer.errors)


        