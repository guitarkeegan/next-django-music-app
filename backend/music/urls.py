from django.urls import path
from . import views

urlpatterns = [
    path('messages/', views.getAllMessages, name='messages')
]