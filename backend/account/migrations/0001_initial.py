# Generated by Django 4.1.5 on 2023-01-21 22:24

import account.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('instrument', models.CharField(choices=[('Guitar / Bass / Ukulele', 'Guitar'), ('Violin / Viola / Cello / Double-Bass', 'Strings'), ('Saxophone / Flute / Clarinet', 'Winds'), ('Trumpet / French Horn / Trombone / Tuba', 'Brass'), ('Drums / Percussion', 'Drums'), ('Voice', 'Voice'), ('Piano', 'Piano'), ('Other', 'Other')], default='Other', max_length=50)),
                ('role', models.CharField(choices=[('Student', 'Student'), ('Teacher', 'Teacher')], default='Student', max_length=30, validators=[account.models.role_validator])),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='userprofile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
