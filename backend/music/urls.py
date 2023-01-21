from django.urls import path
from . import views

# keegan-> changes this to fit messages
urlpatterns = [
    path('messages/', views.getAllMessages, name='messages')
]