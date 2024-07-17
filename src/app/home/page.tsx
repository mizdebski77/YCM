'use client'

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../core/store/store';
import Header from './Header';
import { Informations } from './informations';
import { HowItWorks } from './howItWorks';


export default function Hero() {

    return (
        <main className='overflow-x-hidden '>
            <Header />
            <Informations />
            <HowItWorks />
            {/* <OurCreator />
            <Path />
            <PhotoSection /> */}
        </main>
    )
}