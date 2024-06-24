"use client";
import { motion } from "framer-motion"
import { informationsData } from '../core/arrays';

export const Informations = () => {
    return (
        <motion.div
            className=" max-w-[90%] bg-base-100 shadow-xl m-auto my-12 grid lg:grid-cols-3 justify-center align-center rounded-3xl"
            initial={{ y: '30%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            {informationsData.map((information, index) => (
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className={`p-6 flex justify-center items-center gap-4 ${index % 2 === 0 ? ' ' : 'lg:border-y-0 border-y-2 lg:border-x-2 border-green'}`}>
                    <img
                        src={information.img.src}
                        alt='AI brain'
                        className='md:max-w-20 max-w-12 '
                    />
                    <span
                        className="md:card-title text-md font-medium">
                        {information.preText}
                        <span className='text-green'>
                            {information.coloredText}
                        </span> {information.postText}</span>
                </motion.div>
            ))}
        </motion.div>
    )
}
