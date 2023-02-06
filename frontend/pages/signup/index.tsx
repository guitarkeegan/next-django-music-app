import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import { SyntheticEvent } from "react";

import axios from "axios";


import NextLink from 'next/link';
import Layout from "@/components/layout/Layout";


export default function SignUp() {
    const router = useRouter();

    type FormValues = {
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        password: string,
        role: string,
        instrument: string,
    }



    //getting function to build registration form using useForm()

    const { register, handleSubmit, formState } = useForm<FormValues>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            role: '',
            instrument: '',
        }
    });

    

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log("here is the event...");
       

    }

    const { errors } = formState;

    return (
        <div className="absolute mt-64 left-0 right-0 mx-auto w-3/4 bg-darkerBackground py-6 px-3 text-2xl text-white rounded-md text-center md:w-1/4 md:px-6 sm:w-3/4">
            <h1 className="mb-10 text-center">SignUp</h1>
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <input {
                        ...register('firstName', {
                            required: {
                                value: true,
                                message: 'First name is required'
                            }
                        })
                    } placeholder="First Name" className="bg-inherit mb-4"></input>
                    <input {
                        ...register('lastName', {
                            required: {
                                value: true,
                                message: 'Last name is required'
                            }
                        })
                    } placeholder='Last Name' className="bg-inherit mb-4"></input>
                    <input {
                        ...register('email', {
                            required: {
                                value: true,
                                message: "Email is required",
                            }
                        })
                    } type="email" placeholder="email@domain.com" className="bg-inherit mb-4"></input>
                    <input {
                        ...register("username", {
                            required: {
                                value: true,
                                message: "You must have a username to register"
                            }
                        })
                    } placeholder="username" className="bg-inherit mb-4"></input>
                    <input {
                        ...register("password", {
                            required: {
                                value: true,
                                message: "Password is a requried field",
                            }
                        })
                    } type='password' placeholder="password" pattern="[a-z0-9}{1,15}" title="Password should include no special characters" className="bg-inherit mb-3"></input>
                    <input {
                        ...register("role", {
                            required: {
                                value: true,
                                message: "Please select either student or teacher"
                            }
                        })
                    }
                    className="bg-inherit mb-4" placeholder="student or teacher"></input>
                    <input {
                        ...register("instrument", {
                            required: {
                                value: true,
                                message: "You must include which instrument you play"
                            }
                        })
                    }
                    className="bg-inherit mb-4" placeholder="instrument"></input>
                    <button className="bg-lighterBackground rounded-lg text-black py-2 px-3" type="submit">Register</button>

                </form>
        </div>
    )



}