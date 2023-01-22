from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Lesson
from lessons.serializers import LessonCreationSerializer

#create lesson
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_lesson(request):
    data = request.data

    lesson = LessonCreationSerializer(data=data)

    if lesson:
        if not Lesson.objects.filter(id=data['id']).exists():
            lesson = Lesson.objects.create(
                title = data['title'],
                description = data["description"],
                author = data["author"],
                lesson_video = data["lesson_video"],
                lesson_photo = data["lesson_photo"],
            )
            return Response({
                'message': 'Lesson created.'},
                status=status.HTTP_201_created
                )
        else:
            return Response({
                "error": "Lesson already exists",
            },
            status=status.HTTP_400_BAD_REQUEST
            )
    else:
        return Response(lesson.errors)



# user to get lesson data
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAllLessons(request):
    lessons = Lesson.objects.all()
    serializer = LessonCreationSerializer(lessons, many=True)

    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getLessonByID(request, id):
    lesson = Lesson.objects.get(id=id)


# to update lesson info
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_lesson(request, id):
    lesson = Lesson.objects.get(id = id)

    data = request.data

    lesson.title = data['title']
    lesson.description = data['description']
    lesson.lesson_video = data['lesson_video']
    lesson.lesson_photo = data['lesson_photo']

    if data['title'] != '':
        lesson.title = data['title']

    lesson.save()

    serializer = LessonCreationSerializer(lesson, many = True)
    return Response(serializer.data)

#To delete one lesson

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_lesson(request, id):
    lesson = Lesson.objects.get(id)

    lesson.delete()
    return Response({
        "message": "Lesson deleted"
    }, status=status.HTTP_201_deleted)