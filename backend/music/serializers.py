from rest_framework import serializers
from .models import Message
from django.contrib.auth.models import User


class MusicMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        # looking as well for fields to return?
        fields = "__all__"