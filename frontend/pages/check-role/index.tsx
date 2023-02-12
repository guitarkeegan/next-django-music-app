import {useState, useEffect} from 'react'
import { useAuth } from '@/context/AuthContext';
import type { SyntheticEvent } from 'react';
import {useRouter} from 'next/router';

export default function CheckRole(){

    const router = useRouter();

    const {user} = useAuth();

    const [userProfile, setUserProfile] = useState(
        {
            instrument: "",
            role: "",
        }
    );

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log("handling submit...");
        // update user profile
    }

    useEffect(()=>{
        if (!user){
            router.push("/login");
        }
    },[]);

    const handleChange = (e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement;
        const value = target.value;
        const name = target.name;

        setUserProfile({
            ...userProfile,
            [name]: value
        })
    }

    return (
        <div className="absolute mt-64 left-0 right-0 mx-auto w-3/4 bg-darkerBackground py-6 px-3 text-2xl text-white rounded-md text-center md:w-1/4 md:px-6 sm:w-3/4">
            <h1 className="mb-10 text-center">{user && `Hey ${user.first_name}, please tell us your role and instrument, so we know where to send you!`}</h1>
            <form onSubmit={handleSubmit}>
                <label className="mb-2">Role</label>
                <br />
                <input value={userProfile.role} onChange={handleChange} name="username" className="bg-inherit mb-4"  placeholder="Student or Teacher" type="text" />
                <br />
                <label>password</label>
                <br />
                <input value={userProfile.instrument} type="text" name="instrument" id="" placeholder="ex. guitar" onChange={handleChange}className="bg-inherit mb-3"/>
                <br />
                <button className="bg-lighterBackground rounded-lg text-black py-2 px-3" type="submit">Login</button>
            </form>
            </div>
    )
}