from django.urls import path
from . import views

urlpatterns = [
    path('create-lesson/', views.create_lesson, name='create_lesson'),
    path('all-lessons/teacher', views.get_all_lessons_teacher, name='get_all_lessons_teacher'),
    path('all-lessons/student', views.get_all_lessons_teacher, name='get_all_lessons_student'),
    path('lesson/:id/', views.getLessonByID, name='get_lesson'),
    path('lesson/update', views.update_lesson, name= 'update_lesson'),
    path('lesson/delete/:id', views.delete_lesson, name="delete_lesson")
]