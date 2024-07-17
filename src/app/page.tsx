'use client'
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from "./core/store/store";
import { decrement, increment, selectCount } from "./counterslice";
import Profile from './Profile/page';
import LogIn from './Log-In/page';
import Register from './Register/page';
import Header from './Header/page';

export default function Home() {
    const count = useSelector((state: RootState) => selectCount(state));
    const dispatch = useDispatch<AppDispatch>();

    return (
        <main className='overflow-x-hidden '>
            <Profile />
            <LogIn />
            <Header />
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </main>
    )
}