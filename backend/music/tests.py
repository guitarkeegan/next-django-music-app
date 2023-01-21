from django.test import TestCase
from django.core.exceptions import ValidationError


# Create your tests here.



from django.test import TestCase
from music.models import Message

class MessageTestCase(TestCase):
    
    '''
    Setup by creating message
    '''
    def setUp(self):
       self.message = Message.objects.create(
            message = "This is a test message",
            recipient = "brad@mehldau.com")
            
        self.assertEqual(self.message.recipient, "brad@mehldau.com")

    def test_recipient_can_get_message(self):
        ''' 
        Able to go to recipient then access message
        '''

        recipient = Message.objects.get(recipient = "brad@mehldau.com")
        self.assertEqual(recipient.message, "This is a test message")