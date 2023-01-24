from django.db import models
from django.contrib.auth.models import User


# Create your models here.

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
