from django.test import TestCase
from lessons.models import Lesson

# Create your tests here.
class LessonTestCase(TestCase):
        
    def setUp(self):
        ''' 
        Setup  by creating a new lesson
        '''
        self.lesson = Lesson.objects.create(
            title = 'First Lesson',
            description = 'This is the intro tutorial',
            author = 'brad@mehldau.com',
            lesson_photo = 'http://clipart-library.com/clipart/rijG895rT.html' )
    
        ''' Test to see if Lesson was created'''
        self.assertEqual(self.lesson.created_on)
    
    def lesson_can_be_accessed(self):
        lesson = Lesson.objects.get(author = "brad@mehldau.com")
        self.assertEqual(lesson.author.email, "brad@mehldau.com")

    # TODO: create authentication for only teachers creating lessons and test
    # TODO: test that author can add images
    # TODO: test that author can add videos
    # TODO: add periphery test case that same lesson cannot be created twice
