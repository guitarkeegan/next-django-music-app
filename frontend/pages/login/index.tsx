export default function Login(){
    return (
        <div className="absolute mt-64 left-0 right-0 mx-auto w-3/4 bg-darkerBackground py-6 px-3 text-2xl text-white rounded-md text-center md:w-1/4 md:px-6 sm:w-3/4">
            <h1 className="mb-10 text-center">Login</h1>
            <form>
                <label className="mb-2">email</label>
                <br />
                <input className="bg-inherit mb-4"  placeholder="your@email.com" type="email" />
                <br />
                <label>password</label>
                <br />
                <input type="password" name="password" id="" placeholder="password123" className="bg-inherit mb-3"/>
                <br />
                <button className="bg-lighterBackground rounded-lg text-black py-2 px-3" type="submit">Login</button>
            </form>
        </div>
    )
}