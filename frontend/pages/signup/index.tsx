import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';


import NextLink from 'next/link';
import Layout from "@/components/layout/Layout";


export default function SignUp(){
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

    

    const { errors } = formState;

    return (
        <div>
            <Layout>
                <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <input {
                        ...register('firstName', {
                            required: {
                                value: true,
                                message: 'First name is required'
                            }
                        })
                    } placeholder= "First Name"></input>
                    <input {
                        ...register('lastName', {
                            required: {
                                value: true,
                                message: 'Last name is required'
                            }
                        })
                    } placeholder = 'Last Name'></input>
                    <input {
                        ...register('email', {
                            required: {
                                value: true,
                                message: "Email is required",
                            } 
                        })
                    } type="email" placeholder="email@domain.com"></input>
                        <input {
                            ...register("username", {
                                required: {
                                    value: true,
                                    message: "You must have a username to register"
                                }
                            })
                        } placeholder="username"></input>
                    <input {
                        ...register("password", {
                            required: {
                                value: true,
                                message: "Password is a requried field",
                            }
                        })
                    } type='password' pattern="[a-z0-9}{1,15}" title="Password should include no special characters"></input>
                    <input {
                        ...register("role", {
                            required: {
                                value: true,
                                message: "Please select either student or teacher"
                            }
                        })
                    }
                    ></input>
                    <input {
                        ...register("instrument", {
                            required: {
                                value: true,
                                message: "You must include which instrument you play"
                            }
                        })
                    }
                    ></input>

                </form>
            </Layout>
        </div>
    )
    


}