"use client";
import logo from '../common/Images/blackLogo.svg';
import { useEffect, useState } from "react";
import { auth, db } from "../core/firebase";
import { doc, getDoc } from "firebase/firestore";
import { UserDetails } from '../core/intrface';
import profile from './Images/account.svg';

export const Navigation = () => {
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log(user);
                const docRef = doc(db, 'Users', user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data() as UserDetails);
                    console.log(docSnap.data());
                } else {
                    console.log('User document does not exist!');
                }
            } else {
                console.log('User is not logged in!');
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    console.log(userDetails);


    return (
        <nav className="navbar bg-[#f7f7f7] sticky top-0 z-20 px-12 py-4 flex justify-between">
            <div className="flex justify-between ">
                <a href='/' className="text-xl">
                    <img src={logo.src} alt='logo' />
                </a>
            </div>
            <div>
                <a className='flex items-center gap-3' href='/Profile'>
                    <img src={profile.src} className='max-w-8' alt='profile' />
                    {userDetails ? userDetails.name : ' '}
                </a>
            </div>
        </nav>
    );
};
