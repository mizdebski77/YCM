'use client'
// import { HowItWorks } from "./Home/howItWorks";
// import { OurCreator } from "./Home/ourCreator";
// import { Path } from "./Home/path";
// import { PhotoSection } from "./Home/photoSection";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from "./core/store/store";
import { decrement, increment, selectCount } from "./counterslice";
import { Informations } from "./Home/informations";
// import Header from "./Home/header";
import LogIn from "./Log-In/page";

export default function Home() {
    const count = useSelector((state: RootState) => selectCount(state));
    const dispatch = useDispatch<AppDispatch>();

    return (
        <main className='overflow-x-hidden '>
            <LogIn />
            {/* <Informations />
            <HowItWorks />
            <OurCreator />
            <Path />
            <PhotoSection /> */}
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </main>
    )
}