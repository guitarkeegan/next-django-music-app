from .models import Lesson
from rest_framework import serializers

class LessonSerializer(serializers.ModelSerializer):
    title = serializers.CharField(source="lesson.title")
    description= serializers.CharField(source="lesson.description")
    

    class Meta:
        model = Lesson
        fields = "__all__"

class LessonCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ("title", "description", "author", "lesson_video", "lesson_photo")
        extra_kwargs = {
            "title": {"required": True, "allow_blank": False},
            "description": {"required":False, "allow_blank":True},
            "lesson_video":{"required":False, "allow_blank":True},
            "lesson_photo":{"required":False, "allow_blank":True},
        }