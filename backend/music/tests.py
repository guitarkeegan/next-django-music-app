from django.test import TestCase
from myapp.models import UserProfile
# Create your tests here.
class UserProfileTestCase(TestCase):
    
    def setup(self):
        '''
        Able to create a new teacher and student.
        '''
        User.objects.create(
            username="Brad Mehldau", 
            password="bumblebeessZZ!@#$asiiiUYhdf")
        User.objects.create(
            username="Joshua Redman", 
            password="jiJIbbUna93437a83930384hdf7")
        # self.assertEqual()