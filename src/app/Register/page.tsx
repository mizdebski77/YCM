
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
                    <a href='/LogIn' className=" btn bg-green border-none text-white hover:bg-lightgreen md:text-md text-sm font-medium mx-auto px-24 z-10 ">Login Panel</a>
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
            </motion.div>
        </div >
    )
}