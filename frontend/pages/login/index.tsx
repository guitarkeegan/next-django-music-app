import {SyntheticEvent, useState} from 'react'
import { useAuth } from '@/context/AuthContext';

export default function Login(){

    const {user, login} = useAuth();

    const [loginUser, setLoginUser] = useState(
        {
            username: "",
            password: "",
        }
    );

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log("handling submit...");
        login(loginUser)
    }

    const handleChange = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        const value = target.value;
        const name = target.name;

        setLoginUser({
            ...loginUser,
            [name]: value
        })
    }

    

    return (
        <div className="absolute mt-64 left-0 right-0 mx-auto w-3/4 bg-darkerBackground py-6 px-3 text-2xl text-white rounded-md text-center md:w-1/4 md:px-6 sm:w-3/4">
            <h1 className="mb-10 text-center">{!user ? "Login" : "Logout"}</h1>
            <form onSubmit={handleSubmit}>
                <label className="mb-2">email</label>
                <br />
                <input value={loginUser.username} onChange={handleChange} name="username" className="bg-inherit mb-4"  placeholder="your@email.com" type="email" />
                <br />
                <label>password</label>
                <br />
                <input value={loginUser.password} type="password" name="password" id="" placeholder="password123" onChange={handleChange}className="bg-inherit mb-3"/>
                <br />
                <button className="bg-lighterBackground rounded-lg text-black py-2 px-3" type="submit">Login</button>
            </form>
        </div>
    )
}