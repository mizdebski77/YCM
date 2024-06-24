"use client";
import React from 'react';
import img from '../../Images/whyYouSHould.jpg';
import { choseUsData } from '@/app/core/arrays';
import { motion } from "framer-motion"

export const OurCreator = () => {
    return (
        <section className='max-w-[90%] shadow-[0_0_20px_#b9b9b9]  rounded-2xl md:p-14 p-8 mt-20 mx-auto grid lg:grid-cols-2 gap-12 items-center'>
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
        </section>
    );
};

