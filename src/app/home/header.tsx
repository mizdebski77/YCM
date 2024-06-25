"use client";
import background from '../common/Images/hero.jpg';
import { motion } from "framer-motion"

export const Header = () => {
    return (
        <header style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'inset 1008px -184px 116px 5px #f7f7f7',
            maxWidth: '1920px',
            margin: 'auto'
        }}
            className='md:min-h-[540px] md:p-14 px-12 pt-14 flex justify-start'
        >
            <div className='grid justify-center items-center gap-2 max-w-[980px]'>
                <motion.h1
                    initial={{ y: '-20%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="lg:text-7xl sm:text-4xl text-3xl text-blue text-center">
                    Stand Out in the job Market with our
                    <span className="text-green"> AI - Powered</span> CV Creator</motion.h1>
                <motion.div
                    initial={{ y: '40%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="md:flex grid items-center justify-center md:gap-5">
                    <button
                        className="btn btn-acce border-none bg-green text-white btn-active hover:bg-lightgreen md:text-lg text-sm font-medium">
                        Creat your CV with AI
                    </button>
                    <span
                        className="divider divider-horizontal md:m-4 my-0 mx-auto">OR</span>
                    <button
                        className="btn bg-blue border-none text-white hover:bg-lightblue md:text-lg text-sm font-medium ">
                        Log-In to yout account
                    </button>
                </motion.div>
            </div>

        </header>
    )
}