'use client'
// import { HowItWorks } from "./Home/howItWorks";
// import { Informations } from "./Home/informations";
// import { OurCreator } from "./Home/ourCreator";
// import { Path } from "./Home/path";
// import { PhotoSection } from "./Home/photoSection";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from "./core/store/store";
import { decrement, increment, selectCount } from "./counterslice";
import { Header } from "./Home/header";

export default function Home() {
    const count = useSelector((state: RootState) => selectCount(state));
    const dispatch = useDispatch<AppDispatch>();

    return (
        <main className='overflow-x-hidden '>
            <Header/>
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