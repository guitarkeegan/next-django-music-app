from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator


class Message(models.Model):
    message = models.TextField(),
    #  TODO: Fix models relationship to include who sent it
    sent_at = models.DateTimeField(auto_now_add=True)
    # Keegan-> 'I changed this to User after moving the class to accounts'
    recipient = models.ForeignKey(User, on_delete = models.CASCADE)
    class Meta:
        ordering = ['sent_at']

        def __unicode__(self):
            return self.title
    
class Lesson(models.Model):
    title= models.CharField(max_length=200, null=True)
    description = models.TextField(null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_on = models.DateField(auto_now_add=True)
    # TODO: Need to add apache limitrequest module for preventative ddos attacks 
    lesson_video = models.FileField(upload_to= 'resources/')
    lesson_photo = models.ImageField(upload_to='image-resources/')
    class Meta:
        ordering =['created_on']

        def __unicode__(self):
            return self.title