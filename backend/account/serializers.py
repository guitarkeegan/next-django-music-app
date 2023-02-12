from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    instrument = serializers.CharField(source="userprofile.instrument")
    role = serializers.CharField(source="userprofile.role")
    relationship = serializers.CharField(source="userprofile.relationship")
    class Meta:
        model = User
        fields = ("first_name", "last_name", "email", "username", "instrument", "role", "relationship")

class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("first_name", "last_name", "email", "password")
        extra_kwargs = {
            "first_name": {"required": True, "allow_blank": False},
            "last_name": {"required": True, "allow_blank": False},
            "email": {"required": True, "allow_blank": False},
            "password": {"required": True, "allow_blank": False, "min_length": 6},
        }