import Link from 'next/link'
import {FC} from 'react'

// interface FuncProps {
//     setPage(page: String): void
// }

export default function Home(){
    return (
        <div>
        <div>
            <video playsInline autoPlay muted loop poster="images/piano_background_static.png" id="bgvid" className="object-cover w-screen h-screen fixed top-0 left-0 -z-10">
                <source src="video/home_video_background.mp4" type="video/mp4" />
           </video>
           
        </div>
        <div className="absolute mt-48 md:ml-8 sm:text-left py-10 px-5" style={{backgroundColor: 'rgba(104, 134, 109, .7)'}}>
        <div className="text-white">
            <h1 className="text-6xl">Waveform</h1>
            <br/>
            <br/>
            <p className="text-2xl max-w-[300px] mb-5">A place where students and teachers and share lesson materials and schedule meetings</p>
            <Link href={'/signup'} className="bg-lighterBackground rounded text-black py-2 px-4 focus:bg-darkerBackground hover:bg-darkerBackground hover:text-white">Get Started</Link>
            <Link href={'/login'} className="bg-lighterBackground rounded text-black  ml-2 py-2 px-4 focus:bg-darkerBackground hover:bg-darkerBackground hover:text-white">Already a Member?</Link>
        </div>
       </div>
       </div>
        
    )
}