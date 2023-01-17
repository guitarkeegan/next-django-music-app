from django.test import TestCase
from music.models import UserProfile

# Create your tests here.


class UserProfileTestCase(TestCase):

    def setup(self):
        '''
        Able to create a new teacher and student, 
        then login
        '''
        self.user = User.objects.create_user(
            username="Brad Mehldau",
            password="bumblebeessZZ!@#$asiiiUYhdf")
        login = self.client.login(
            username="Brad Mehldau", password="bumblebeessZZ!@#$asiiiUYhdf")
        print(login)
        self.assertEqual(login.username, "Brad Mehldau")

