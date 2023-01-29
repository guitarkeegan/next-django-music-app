

export default function Home(){
    return (
        <div>
            <video playsInline autoPlay muted loop poster="images/piano_background_static.png" id="bgvid" className="object-cover w-screen h-screen fixed top-0 left-0 -z-10">
                <source src="video/home_video_background.mp4" type="video/mp4" />
           </video>
        </div>
    )
}