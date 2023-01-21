from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

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
def role_validator(role):
    if role != "Student" or role != "Teacher":
        raise ValidationError(massage=f"Role must be either 'Student' or 'Teacher'. Inputted role was: {role}.")
    
class UserProfile(models.Model):
    user = models.OneToOneField(User, related_name='userprofile', on_delete=models.CASCADE)
    instrument = models.CharField(
        max_length = 50,
        choices = InstrumentType.choices,
        default = InstrumentType.Other
    )
    role = models.CharField(
        # TODO: validator not checking properly
        validators = [role_validator],
        max_length = 30,
        choices = RoleType.choices,
        default = RoleType.Student
    )