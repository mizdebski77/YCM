import { pathData } from '@/app/core/arrays';
import React from 'react';

export const Path = () => {
    return (
        <div className='w-full bg-blue p-12 mt-20 shadow-[0_0_20px_#919191] flex justify-around'>
            {pathData.map((information) => (
                <div key={information.id} className='flex items-center gap-6'>
                    <span className='bg-green text-white flex justify-center items-center w-[56px] h-[56px]  rounded-full text-2xl'>{information.id}</span>
                    <span className='text-white text-2xl font-light'>{information.text}</span>
                </div>
            ))}
        </div>
    );
}; 
