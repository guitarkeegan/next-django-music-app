from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Message
from music.serializers import MusicMessageSerializer

# Create your views here.

@api_view(['GET'])
def getAllMessages(request):
    messages = Message.objects.all()
    serializer = MusicMessageSerializer(messages, many=True)
    
    return Response(serializer.data)

