"use client";
import React from 'react';
import img from '../../common/Images/whyYouSHould.jpg';
import { choseUsData } from '@/app/core/arrays';
import { motion } from "framer-motion"

export const OurCreator = () => {
    return (
        <section className='p-4'>
            <div className=' shadow-[0_0_20px_#b9b9b9]  rounded-2xl md:p-14 p-8 lg:mt-[-120px] mx-auto grid lg:grid-cols-2 gap-12 items-center max-w-screen-2xl'>
                <motion.div
                    initial={{ x: '-20%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className=' mb-8 md:text-5xl text-2xl text-center'> Why <span className='text-green'>you should</span> chose our creator?</h3>
                    {choseUsData.map((text, index) => (
                        <p className=' border-b border-green md:p-5 p-2 text-center md:text-lg ' key={index}>{text}</p>
                    ))}
                </motion.div>
                <motion.img
                    src={img.src} alt='why you should chose us'
                    initial={{ x: '20%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className='rounded-2xl shadow-[0_0_20px_#b9b9b9] ' />
            </div>
        </section>
    );
};

