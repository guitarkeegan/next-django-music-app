from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator

# Instrument type choices for User
class InstrumentType(models.TextChoices):
    Guitar = "Guitar / Bass / Ukulele"
    Strings = "Violin / Viola / Cello / Double-Bass"
    Winds = "Saxophone / Flute / Clarinet"
    Brass = "Trumpet / French Horn / Trombone / Tuba"
    Drums = "Drums / Percussion"
    Voice = "Voice"
    Piano = "Piano"
    Other = "Other"

# Role type choices for User
class RoleType(models.TextChoices):
    Student = "Student"
    Teacher = "Teacher"

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    instrument = models.CharField(
        max_length = 50,
        choices = InstrumentType.choices,
        default = InstrumentType.Other
    )
    role = models.CharField(
        # TODO: validator not checking properly
        validators = [RegexValidator(r'Student|Teacher', message="Role must be Student or Teacher",
        code="invalid role")],
        max_length = 30,
        choices = RoleType.choices,
        default = RoleType.Student
    )

class Message(models.Model):
    message = models.TextField(),
    #  TODO: Fix models relationship to include who sent it
    sent_at = models.DateTimeField(auto_now_add=True)
    recipient = models.ForeignKey(UserProfile, on_delete = models.CASCADE)
    class Meta:
        ordering = ['sent_at']

        def __unicode__(self):
            return self.title
    
