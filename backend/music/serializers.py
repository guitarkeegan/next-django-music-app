from rest_framework import serializers
from .models import UserProfile, Message
from django.contrib.auth.models import User



class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        # fields to return?
        fields = "__all__"

class MusicMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        # looking as well for fields to return?
        fields = "__all__"