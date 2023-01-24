from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator


class Message(models.Model):
    message = models.TextField(),
    #  TODO: Fix models relationship to include who sent it
    sent_at = models.DateTimeField(auto_now_add=True)
    recipient = models.ForeignKey(User, on_delete = models.CASCADE)
    class Meta:
        ordering = ['sent_at']

        def __unicode__(self):
            return self.title
    
