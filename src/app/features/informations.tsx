"use client";
import { motion } from "framer-motion"
import { informationsData } from '../core/arrays';

export const Informations = () => {
    return (
        <motion.div
            className=" max-w-[90%] bg-base-100 shadow-xl m-auto my-12 grid grid-cols-3 justify-center align-center rounded-3xl"
            initial={{ y: '30%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
        >
            {informationsData.map((information, index) => (
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className={`p-6 flex justify-center ${index % 2 === 0 ? ' ' : 'border-x-2 border-green'}`}>
                    <img
                        src={information.img.src}
                        alt='AI brain'
                        className='max-w-20'
                    />
                    <span
                        className="card-title">
                        {information.preText}
                        <span className='text-green'>
                            {information.coloredText}
                        </span> {information.postText}</span>
                </motion.div>
            ))}
        </motion.div>
    )
}
