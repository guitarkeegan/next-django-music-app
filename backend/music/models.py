from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator


class Message(models.Model):
    title = models.CharField(max_length=200, null=True)
    message = models.TextField(null=True)
    #  TODO: Fix models relationship to include who sent it
    sent_at = models.DateTimeField(auto_now_add=True)
    recipient = models.ForeignKey(User, on_delete = models.CASCADE, related_name='recipient', default="")
    sender = models.ForeignKey(User, on_delete = models.CASCADE, related_name='sender', default="")
    
    class Meta:
        ordering = ['sent_at']

        def __unicode__(self):
            return self.title
    
