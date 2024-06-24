"use client";
import background from '../Images/hero.jpg';
import { motion } from "framer-motion"

export const Header = () => {
    return (
        <header style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'inset 1008px -184px 116px 5px #f7f7f7'
        }}
            className='min-h-[540px] p-14 flex justify-start'
        >
            <div className='grid justify-center items-center gap-2 max-w-[980px]'>
                <motion.h1
                    initial={{ y: '-20%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                    className="text-7xl text-blue text-center">
                    Stand Out in the job Market with our
                    <span className="text-green">AI - Powered</span> CV Creator</motion.h1>
                <motion.div
                    initial={{ y: '100%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center justify-center gap-5">
                    <button
                        className="btn btn-acce border-none bg-green text-white btn-active hover:bg-lightgreen text-lg font-medium">
                        Creat your CV with AI
                    </button>
                    <div
                        className="divider divider-horizontal">OR</div>
                    <button
                        className="btn bg-blue border-none text-white hover:bg-lightblue text-lg font-medium ">
                        Log-In to yout account
                    </button>
                </motion.div>
            </div>

        </header>
    )
}