"use client";
import { pathData } from '@/app/core/arrays';
import React from 'react';
import { motion } from "framer-motion"

export const Path = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='w-full bg-blue lg:p-12 p-6 py-8 mdz:mt-32 mt-16 shadow-[0_0_20px_#919191] md:flex justify-evenly grid gap-3 z-10 relative '>
            {pathData.map((information) => (
                <motion.div
                    initial={{ y: '50%', opacity: 0 }}
                    whileInView={{ y: '0%', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: information.id * 0.2 }} key={information.id}
                    className='flex items-center gap-6'>
                    <span className='bg-green text-white flex justify-center items-center md:w-[56px] md:h-[56px] w-[32px] h-[32px] rounded-full md:text-2xl'>{information.id}</span>
                    <span className='text-white md:text-2xl font-light'>{information.text}</span>
                </motion.div>
            ))}
        </motion.div>
    );
}; 
