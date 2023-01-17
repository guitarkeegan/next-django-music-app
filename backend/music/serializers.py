from rest_framework import serializers
from .models import MusicUser

class MusicUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MusicUser
        fields = "__all__"