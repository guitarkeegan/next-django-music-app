import {useState} from 'react';
import { SyntheticEvent } from 'react';
import Schedule from '@/components/teacher-dashboard/schedule';
import Lessons from '@/components/teacher-dashboard/lessons';
import Messages from '@/components/teacher-dashboard/messages';
import Resources from '@/components/teacher-dashboard/resources';

export default function TeacherDashboard() {

    const [section, setSection] = useState('schedule');

    const renderDisplay = () => {
        switch (section) {
            case 'schedule':
                return <Schedule />;
            case 'lessons':
                return <Lessons />;
            case 'resources':
                return <Resources />;
            case 'messages':
                return <Messages />;
        }
    }

    const handleNavButtons = (e: SyntheticEvent) => {
        const target = e.target as HTMLButtonElement;
        setSection(target.name);
        
    }


  return (
    <>
      <div className="absolute mt-32 left-0 right-0 mx-auto w-3/4 flex justify-center gap-x-32">
        <button onClick={handleNavButtons} name='resources' className="bg-lighterBackground rounded-full border border-black text-black  ml-2 py-2 px-4 focus:bg-darkerBackground hover:bg-darkerBackground hover:text-white w-36">Resources</button>
        <button onClick={handleNavButtons} name='lessons' className="bg-lighterBackground rounded-full border border-black text-black  ml-2 py-2 px-4 focus:bg-darkerBackground hover:bg-darkerBackground hover:text-white w-36">Lessons</button>
        <button onClick={handleNavButtons} name='schedule' className="bg-lighterBackground rounded-full border border-black text-black  ml-2 py-2 px-4 focus:bg-darkerBackground hover:bg-darkerBackground hover:text-white w-36">Schedule</button>
        <button onClick={handleNavButtons} name='messages' className="bg-lighterBackground rounded-full border border-black text-black  ml-2 py-2 px-4 focus:bg-darkerBackground hover:bg-darkerBackground hover:text-white w-36">Messages</button>
      </div>
      <div className="absolute mt-64 left-0 right-0 mx-auto md:w-3/4">
        <h1>Display area</h1>
        {section && renderDisplay()}
      </div>
    </>
  );
}
