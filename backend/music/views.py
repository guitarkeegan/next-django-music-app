from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UserProfile, Message
from music.serializers import UserProfileSerializer

# Create your views here.
@api_view(['GET'])
def getAllUsers(request):
    users = User.objects.all()
    serializer = UserProfileSerializer(users, many=True)
    
    return Response(serializer.data)