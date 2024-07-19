
"use client";
import buble from '../common/Images/whiteBuble.svg';
import loginImage from '../common/Images/login.svg';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { motion } from "framer-motion"
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../core/firebase';
import { toast } from 'react-toastify';
import Image from 'next/image';

export default function LogIn() {

    const [visiblePassword, setVisiblePassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleVisibility = () => (
        setVisiblePassword(!visiblePassword)
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('User logged in succesfully');
            window.location.href = '/Profile'
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    };

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
            console.log(result);
            if (result.user) {
                toast.success('User logged in succesfully');
                window.location.href = '/Profile'
            }
        })
    };


    return (
        <div className="min-h-screen grid md:grid-cols-2 overflow-x-hidden">
            <motion.div
                initial={{ x: '-20%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="m-auto md:p-12 p-4">
                <div className='mb-10'>
                    <h1 className="md:text-5xl text-2xl text-green text-center mb-2">LOGIN</h1>
                    <p className="md:text-3xl text-lg text-blue text-center">Log in to your account and start creating your dream CV</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="px-4  py-10 md:card-body max-w-2xl w-full shadow-[0_0_20px_#b9b9b9] rounded-2xl grid gap-4 m-auto mb-10">
                    <label className="input input-bordered flex items-center gap-2">
                        <MdEmail />
                        <input
                            type="email"
                            className="grow"
                            placeholder="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>


                    <div className="form-control">
                        <label className="input input-bordered flex items-center gap-2">
                            <FaKey />
                            <input
                                required
                                type={visiblePassword ? 'text' : 'password'}
                                className="grow"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type='button' onClick={toggleVisibility}>
                                {visiblePassword ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </label>
                        <a href="#" className="mt-2 label-text-alt link link-hover">Forgot password?</a>
                    </div>
                    <div className="form-control">
                        <button className="btn bg-blue border-none text-white hover:bg-lightblue md:text-md text-sm font-medium m-auto px-24 ">Login</button>
                    </div>
                </form>
                <div className='border-t border-[#b8b8b8] '>
                    <p className='text-center text-blue md:text-2xl text-xl my-6'><span className='font-medium text-green'>Login</span> with others</p>

                    <button
                        onClick={googleLogin}
                        className='cursor-pointer	max-w-xl m-auto mb-4 flex gap-2 items-center md:text-xl text-lg border-2 hover:border-green duration-300 border-[#dbdbdb] py-4 px-20 rounded-xl justify-center'>
                        <FcGoogle className='md:text-4xl text-3xl' />
                        Login with <span className='font-bold'>google</span>
                    </button>

                    <span className='cursor-pointer	 max-w-xl m-auto mb-4 flex gap-2 items-center md:text-xl text-lg border-2 hover:border-green duration-300 border-[#dbdbdb] p-4 rounded-xl justify-center'>
                        <ImFacebook2 className='md:text-4xl text-3xl text-[#1976d2]' />
                        Login with <span className='font-bold'>facebook</span>
                    </span>
                </div>
            </motion.div>


            <motion.div
                initial={{ x: '20%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-green relative flex flex-col justify-center items-center overflow-hidden p-4">
                <img src={buble.src} alt='buble' className='max-w-64 absolute top-[-40px] left-[-80px]' />
                <img src={buble.src} alt='buble' className='max-w-[400px] absolute top-[240px] right-[-240px]' />

                <div className='grid justify-center items-center gap-4 mb-8'>
                    <span className='text-white md:text-5xl text-2xl font-medium'>Don&apos;t have account? </span>
                    <a href='/Register' className=" mx-auto btn bg-blue border-none text-white hover:bg-lightblue md:text-md text-sm font-medium mx -auto md:px-24 px-12 z-10">Register</a>
                </div>

                <img src={buble.src} alt='buble' className='max-w-[620px] absolute bottom-[-120px] left-[-80px] opacity-35' />
                <img src={loginImage.src} alt='Log in' className='max-w-2xl z-10' />
            </motion.div>

        </div >
    )
}

