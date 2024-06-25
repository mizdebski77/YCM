"use client";
import React from 'react';
import img from '../../common/Images/imageSection.jpg';
import { motion } from "framer-motion"
import greenBuble from '../../common/Images/greenBuble.svg';
import blueBuble from '../../common/Images/blueBuble.svg';

export const PhotoSection = () => {
    return (
        <div
            className='grid md:grid-cols-2 md:gap-12 gap-8 m-auto justify-center items-center md:py-32 py-16 px-19 relative max-w-screen-2xl p-4'>
            <img src={greenBuble.src} alt='green buble' className='absolute left-[-150px] z-0 max-w-[420px] top-12' />
            <img src={blueBuble.src} alt='green buble' className='absolute right-[-150px] z-0 max-w-[320px] top-[-150px]' />
            <motion.div
                initial={{ x: '-20%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='flex flex-col justify-center items-center gap-4' >
                <h4 className='md:text-5xl text-2xl text-green text-center'
                >Create a professional CV with our AI creator</h4>
                <p className='mdz:text-3xl text-lg text-blue'>and get hired faster</p>
                <button
                    className="btn bg-blue border-none text-white hover:bg-lightblue md:text-lg text-sm font-medium ">
                    Create CV
                </button>
            </motion.div>
            <motion.img
                src={img.src} alt='why you should chose us'
                initial={{ x: '20%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='rounded-2xl shadow-[0_0_20px_#b9b9b9] ' />
        </div>
    );
};

