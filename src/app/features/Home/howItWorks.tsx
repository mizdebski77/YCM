"use client";
import React from 'react';
import wave from '../../Images/topWave.svg';
import howItWork from '../../Images/howItWorks.jpg';
import { motion } from "framer-motion"

export const HowItWorks = () => {
    return (
        <section>
            <img
                src={wave.src}
                alt='wave'
                className=' w-full'
            />
            <div
                className='bg-green lg:p-24 p-8 grid md:grid-cols-2 md:gap-24 gap-12 items-center md:mt-[-40px]'>
                <motion.img
                    initial={{ x: '-20%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                    src={howItWork.src}
                    alt='how it works'
                    className='rounded-3xl shadow-[0_0_20px_0] shadow-white w-full' />
                <motion.div
                    initial={{ x: '20%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className='text-center md:text-5xl text-2xl text-white tracking-wide'>How it works?</h2>
                    <p className='md:text-2xl  text-white font-light my-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ut iure explicabo saepe aperiam, beatae maxime culpa repellendus iste. Perferendis ea consequatur totam incidunt ad nam doloremque architecto repellendus ab? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ut iure explicabo saepe aperiam, beatae maxime culpa repellendus iste. Perferendis ea consequatur totam incidunt ad nam doloremque architecto repellendus ab?</p>
                </motion.div>
            </div>
        </section>
    );
};

