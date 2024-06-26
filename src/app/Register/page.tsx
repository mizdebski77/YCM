
"use client";
import buble from '../common/Images/whiteBuble.svg';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { motion } from "framer-motion"
import registerImg from '../common/Images/register.svg';

export default function Register() {
    return (
        <div className="min-h-screen  grid md:grid-cols-2 overflow-x-hidden">
            <div className=" relative bg-blue  flex flex-col justify-center items-center overflow-hidden">
                <img src={buble.src} alt='buble' className='max-w-64 absolute top-[-40px] left-[-80px]' />
                <img src={buble.src} alt='buble' className='max-w-[400px] absolute top-[240px] right-[-240px]' />
                <img src={buble.src} alt='buble' className='max-w-[620px] absolute bottom-[-120px] left-[-80px] opacity-35' />
                <div className='grid justify-center gap-4'>
                    <span className='text-white text-5xl font-light'>Alreayd registered? </span>
                    <a href='/Log-In' className=" btn bg-green border-none text-white hover:bg-lightgreen md:text-md text-sm font-medium mx-auto px-24 z-10 ">Login Panel</a>
                </div>
                <motion.img
                    initial={{ x: '20%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    src={registerImg.src} alt='Register' className='max-w-2xl z-10 mx-auto' />
            </div>

            <motion.div
                initial={{ x: '-20%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="m-auto md:p-12 p-4 ">

                <div className='mb-10'>
                    <h1 className="md:text-5xl text-2xl text-green text-center mb-2">Create Account</h1>
                    <p className="md:text-3xl text-lg text-blue text-center">Join us and start creating your dream CV</p>
                </div>
                <div>
                    <h2></h2>
                </div>

                <form className="px-4  py-10 md:card-body max-w-2xl w-full shadow-[0_0_20px_#b9b9b9] rounded-2xl grid gap-4 m-auto mb-10">
                    <label className="input input-bordered flex items-center gap-2">
                        <MdEmail />
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <FaKey />
                        <input type="password" placeholder='Password' className="grow"
                        />
                    </label>


                    <label className="input input-bordered flex items-center gap-2">
                        <FaKey />
                        <input type="password" placeholder='Password' className="grow"
                        />
                    </label>
                    <div className="form-control">
                        <button className="btn bg-blue border-none text-white hover:bg-lightblue md:text-md text-sm font-medium m-auto px-24 ">Create Account</button>
                    </div>
                </form>


            </motion.div>
        </div >
    )
}