from django.test import TestCase
from music.models import UserProfile
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError


# Create your tests here.


class UserTestCase(TestCase):

    def setUp(self):
        '''
        Setup by creating a new user
        '''
        self.user = User.objects.create_user(
            username="Brad Mehldau",
            password="bumblebeessZZ!@#$asiiiUYhdf")
        login = self.client.login(
            username="Brad Mehldau", password="bumblebeessZZ!@#$asiiiUYhdf")
        self.assertEqual(self.user.username, "Brad Mehldau")

    def test_user_can_login(self):
        '''
        Able to create a new teacher and student, 
        then login
        '''
        user = User.objects.get(username="Brad Mehldau")
        self.assertEqual(self.user.username, "Brad Mehldau")

    def test_create_new_profile(self):
        '''
        Able to create a new profile after user creation
        '''
        new_user = User.objects.get(username="Brad Mehldau")
        new_profile = UserProfile.objects.create(
            user=new_user,
            instrument="Piano",
            role="Student"
        )
        self.assertEqual(new_profile.instrument, "Piano")

    def test_except_when_role_does_not_exist(self):
        '''
        Should throw and error if role is not Student or Teacher
        '''
        new_user = User.objects.get(username="Brad Mehldau")
        new_profile = UserProfile.objects.create(
            user=new_user,
            instrument="Piano",
            role="You lose!"
        )
        # this will still assign 'you lose' to role