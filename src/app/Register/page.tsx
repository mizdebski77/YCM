
"use client";
import buble from '../common/Images/whiteBuble.svg';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { motion } from "framer-motion"
import registerImg from '../common/Images/register.svg';
import { FaEye } from "react-icons/fa";
import React, { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../core/firebase';
import { setDoc, doc } from 'firebase/firestore';


export default function Register() {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleVisibility = () => (
        setVisiblePassword(!visiblePassword)
    );

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password,);
            const user = auth.currentUser;
            console.log("User Registered");
            if (user) {
                await setDoc(doc(db, 'Users', user.uid), {
                    email: user.email,
                    name: name,
                });
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            } else {
                console.log("An unknown error occurred");
            }
        }
    }

    return (
        <div className="min-h-screen  flex flex-col-reverse md:grid md:grid-cols-2 overflow-x-hidden ">
            <motion.div
                initial={{ x: '-20%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className=" relative bg-blue  flex flex-col justify-center items-center overflow-hidden p-4">
                <img src={buble.src} alt='buble' className='max-w-64 absolute top-[-40px] left-[-80px]' />
                <img src={buble.src} alt='buble' className='max-w-[400px] absolute top-[240px] right-[-240px]' />
                <img src={buble.src} alt='buble' className='max-w-[620px] absolute bottom-[-120px] left-[-80px] opacity-35' />
                <div className='grid justify-center gap-4'>
                    <span className='text-white md:text-5xl  text-2xl font-medium text-ce'>Alreayd registered? </span>
                    <a href='/Log-In' className=" btn bg-green border-none text-white hover:bg-lightgreen md:text-md text-sm font-medium mx-auto md:px-24 px-12 z-10 ">Login Panel</a>
                </div>
                <img src={registerImg.src} alt='Register' className='max-w-xl z-10 mx-auto' />
            </motion.div>

            <motion.div
                initial={{ x: '20%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="m-auto md:p-12 p-4 ">
                <div className='mb-10'>
                    <h1 className="md:text-5xl text-2xl text-green text-center mb-2">Create Account</h1>
                    <p className="md:text-3xl text-lg text-blue text-center">Join us and start creating your dream CV</p>
                </div>


                <form
                    className="px-4  py-10 md:card-body max-w-2xl w-full shadow-[0_0_20px_#b9b9b9] rounded-2xl grid gap-4 m-auto mb-10"
                    onSubmit={handleRegister}
                >
                    <label className="input input-bordered flex items-center gap-2">
                        <IoMdPerson />
                        <input
                            type='text'
                            placeholder='Name & Surame'
                            className="grow"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <MdEmail />
                        <input
                            type="text"
                            className="grow"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
                        <FaKey />
                        <input
                            type={visiblePassword ? 'text' : 'password'}
                            placeholder='Password'
                            className="grow"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type='button' onClick={toggleVisibility}>
                            {visiblePassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </label>
                    <div className="form-control">
                        <button className="btn bg-blue border-none text-white hover:bg-lightblue md:text-md text-sm font-medium m-auto px-24 ">Create Account</button>
                    </div>
                </form>
                <div className='border-t border-[#b8b8b8] '>
                    <p className='text-center text-blue md:text-2xl text-xl my-6'><span className='font-medium text-green'>Register</span> with others</p>

                    <span className='cursor-pointer	 max-w-xl m-auto mb-4 flex gap-2 items-center md:text-xl text-lg border-2 hover:border-green duration-300	 border-[#dbdbdb] p-4 rounded-xl justify-center'>
                        <FcGoogle className='md:text-4xl text-3xl' />
                        Register with <span className='font-bold'>google</span>
                    </span>

                    <span className='cursor-pointer	 max-w-xl m-auto mb-4 flex gap-2 items-center md:text-xl text-lg border-2 hover:border-green duration-300 border-[#dbdbdb] p-4 rounded-xl justify-center'>
                        <ImFacebook2 className='md:text-4xl text-3xl text-[#1976d2]' />
                        Register with <span className='font-bold'>facebook</span>
                    </span>
                </div>

            </motion.div>
        </div >
    )
}