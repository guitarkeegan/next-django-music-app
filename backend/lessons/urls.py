from django.urls import path
from . import views

urlpatterns = [
    path('create-lesson/', views.create_lesson, name='create_lesson'),
    path('all-lessons/', views.getAllLessons, name='all_lessons'),
    path('lesson/:id/', views.getLessonByID, name='get_lesson'),
    path('lesson/update', views.update_lesson, name= 'update_lesson'),
    path('lesson/delete/:id', views.delete_lesson, name="delete_lesson")
]