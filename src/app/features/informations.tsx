"use client";
import AI from '../Images/AI.svg';
import List from '../Images/List.svg';
import Bulb from '../Images/bulb.svg';
import { motion } from "framer-motion"

export const Informations = () => {
    return (
        <motion.div
            className=" max-w-[90%] bg-base-100 shadow-xl m-auto my-12 grid grid-cols-3 justify-center align-center rounded-3xl"
            initial={{ y: '30%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
        >
            <div className=" p-6 flex justify-center">
                <img src={AI.src} alt='AI brain' className='max-w-20' />
                <span className="card-title">Use <span className='text-green'>AI</span> to create perfect CV</span>
            </div>

            <div className=" p-6 flex border-x-2 border-green justify-center">
                <img src={List.src} alt='AI brain' className='max-w-16' />
                <span className="card-title">20+ <span className='text-green'>CV</span> templates</span>
            </div>

            <div className=" p-6 flex justify-center">
                <img src={Bulb.src} alt='AI brain' className='max-w-20' />
                <span className="card-title">Create your own  <span className='text-green'>CV</span>  template</span>
            </div>
        </motion.div>
    )
}
