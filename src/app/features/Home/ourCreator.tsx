import React from 'react';
import img from '../../Images/whyYouSHould.jpg';
import { choseUsData } from '@/app/core/arrays';

export const OurCreator = () => {
    return (
        <section className='max-w-[90%] shadow-[0_0_20px_#b9b9b9]  rounded-2xl p-14 mt-20 mx-auto grid grid-cols-2 gap-12 items-center'>
            <div>
                <h3 className=' mb-8 text-5xl text-center'> Why <span className='text-green'>you should</span> chose our creator?</h3>
                {choseUsData.map((text, index) => (
                    <p className=' border-b border-green p-5 text-center text-lg' key={index}>{text}</p>
                ))}
            </div>
            <img src={img.src} alt='why you should chose us' className='rounded-2xl shadow-[0_0_20px_#b9b9b9] ' />
        </section>
    );
};

