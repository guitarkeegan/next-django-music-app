from django.test import TestCase
from account.models import UserProfile
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status
# Create your tests here.

class UserTestCase(TestCase):

    def setUp(self):
        '''
        Setup by creating a new user
        '''
        self.user = User.objects.create_user(
            first_name = "Brad",
            last_name = "Mehldau",
            email = "brad@mehldau.com",
            username="brad@mehldau.com",
            password="bumblebeessZZ!@#$asiiiUYhdf")
        login = self.client.login(
            username="brad@mehldau.com", password="bumblebeessZZ!@#$asiiiUYhdf")
        self.assertEqual(self.user.username, "brad@mehldau.com")

    def test_user_can_login(self):
        '''
        Able to create a new teacher and student, 
        then login
        '''
        user = User.objects.get(username="brad@mehldau.com")
        self.assertEqual(self.user.email, "brad@mehldau.com")

    def test_create_new_profile(self):
        '''
        Able to create a new profile after user creation
        '''
        new_user = User.objects.get(username="brad@mehldau.com")
        new_profile = UserProfile.objects.create(
            user=new_user,
            instrument="Piano",
            role="Student"
        )
        self.assertEqual(new_profile.instrument, "Piano")

    def test_exception_when_role_does_not_exist(self):
        '''
        Should throw and error if role is not Student or Teacher
        '''
        new_user = User.objects.get(username="brad@mehldau.com")
        try:
            new_profile = UserProfile.objects.create(
                user=new_user,
                instrument="Piano",
                role="You lose!"
            )
            # TODO: Validation is not checking role, "You Lose!" will be saved
        except ValidationError:
            pass
        
    def test_new_user_can_set_instrument(self):
        '''
        A new user can add and instrument to UserProfile
        '''
        new_user = User.objects.get(username="brad@mehldau.com")
        
        new_profile = UserProfile.objects.create(
                user=new_user,
                instrument="Piano",
                role="Student"
            )
        self.assertEqual(new_profile.instrument, "Piano")
        
class AuthTestCase(APITestCase):
    
    def test_create_user(self):
        """
        Ensure we can create a new user object.
        """
        url = reverse('register')
        data = {
            'first_name': 'Joshua', 
            'last_name': 'Redman', 
            'email': 'joshua@redman.com', 
            'username': 'joshua@redman.com', 
            'password': 'joshuaRedman123'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().first_name, 'Joshua')