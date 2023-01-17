from django.db import models

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
class User(models.Model):
    first_name = models.CharField(max_length=30, null=False)
    last_name = models.CharField(max_length=30, null=False)
    instrument = models.CharField(
        max_length = 50,
        choices = InstrumentType.choices,
        default = InstrumentType.Other
    )
    role = models.CharField(
        max_length = 30,
        choices = RoleType.choices,
        default = RoleType.Student
    )