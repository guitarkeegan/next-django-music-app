from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User, UserProfile, Message
from backend.music.serializers import UserSerializer

# Create your views here.
@api_view(['GET'])
def getAllUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    
    return Response(serializer.data)