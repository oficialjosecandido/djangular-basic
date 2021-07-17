from django.shortcuts import render
from accounts.models import Snippet
from accounts.serializers import SnippetSerializer
from django.http import Http404
from django.http.response import HttpResponse, JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import  *
from .serializer import *


@csrf_exempt
def departmentAPI(request, id=0):
    if request.method == 'GET':
        departments = Department.objects.all()
        departments_serializer = DepartmentSerializer(departments, many = True)
        return JsonResponse(departments_serializer.data, safe=False)
    elif request.method == 'POST':
        print('cheguei aqui?')
        department_data = JSONParser().parse(request)
        departments_serializer = DepartmentSerializer(data = department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse('Added Successfully', safe = False)
        return JsonResponse('Failed to add', safe = False)

class IndexView(APIView):

    def get(self, request, format=None):
        
        content = {
            'wsmg': 'Welcome to Fashion auctions',            
        }
        return Response(content)
        
    
    def post(self, request, format=None):
        serializer = SnippetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)