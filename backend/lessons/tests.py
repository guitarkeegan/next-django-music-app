from django.test import TestCase
from lessons.models import Lesson

# Create your tests here.
class LessonTestCase(TestCase):
        
    def setUp(self):
        ''' 
        Setup  by creating a new lesson
        '''
        Lesson.objects.create(
            title = 'First Lesson',
            description = 'This is the intro tutorial',
            author = 'brad@mehldau.com',
            lesson_photo = 'http://clipart-library.com/clipart/rijG895rT.html' )
    
        ''' Test to see if Lesson was created'''
        self.assertEqual(Lesson.objects.get(title = 'First Lesson'))
    
    def lesson_can_be_accessed(self):
        lesson = Lesson.objects.get(author = "brad@mehldau.com")
        self.assertEqual(lesson.author.email, "brad@mehldau.com")
