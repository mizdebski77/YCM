"use client";
import React from 'react';
import img from '../../Images/imageSection.jpg';
import { motion } from "framer-motion"

export const PhotoSection = () => {
    return (
        <div
            className='grid grid-cols-2 max-w-[80%] gap-12 m-auto justify-center items-center py-20 px-19'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h4 className='text-5xl text-green text-center '>Create a professional CV with our AI creator</h4>
                <p className='text-3xl text-blue'>and get hired faster</p>
                <button
                    className="btn bg-blue border-none text-white hover:bg-lightblue md:text-lg text-sm font-medium ">
                    Create CV
                </button>
            </div>
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

