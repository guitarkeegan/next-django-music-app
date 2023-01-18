from rest_framework import serializers
from .models import MusicUser

class MusicUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        # fields to return?
        fields = "__all__"