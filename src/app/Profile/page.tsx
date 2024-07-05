"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../core/firebase";
import { doc, getDoc } from "firebase/firestore";
import { MdEmail } from "react-icons/md";
import account from '../common/Images/account.jpg';
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { FaCity } from "react-icons/fa";

interface UserDetails {
    name: string;
    email: string;
    lastName: string;
    city: string;
};

export default function Profile() {
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

    async function handleLogout() {
        try {
            await auth.signOut();
            window.location.href = '/Log-In';
            console.log('User logged out successfully!');
        } catch (error) {
            console.log('Something went wrong');
        }
    }

    return (
        <div className="min-h-screen max-w-5xl mx-auto py-24">
            <h1 className="text-center text-5xl border-b-2 pb-6 text-green">Account</h1>
            <div className=' shadow-[0_0_20px_#b9b9b9] rounded-2xl md:p-14 p-8 mt-12 mx-auto '>
                {userDetails ? (
                    <div className=" grid grid-cols-[1fr,2fr]">
                        <div>
                            <div className="max-w-52 w-full  h-52  rounded-full sticky overflow-hidden shadow-[0_0_20px_#b9b9b9]">
                                <img src={account.src} alt="account" className="m-auto w-full relative" />
                                {/* <div className="border-r-2">{userDetails.name}</div> */}
                            </div>
                        </div>

                        <div>
                            <div className="grid grid-cols-2 gap-4 px-4">
                                <label className="input input-bordered flex items-center gap-2">
                                    <IoPersonOutline />
                                    <input
                                        type="name"
                                        className="grow"
                                        placeholder="Name"
                                        value={`${userDetails ? userDetails.name : ' '}`}
                                    />
                                </label>

                                <label className="input input-bordered flex items-center gap-2">
                                    <MdOutlinePersonAddAlt />
                                    <input
                                        type="name"
                                        className="grow"
                                        placeholder="Last Name"
                                        value={`${userDetails ? userDetails.lastName : ' '}`}
                                    />
                                </label>

                                <label className="input input-bordered flex items-center gap-2">
                                    <FaCity />
                                    <input
                                        type="text"
                                        className="grow"
                                        placeholder="City"
                                        value={`${userDetails ? userDetails.city : ' '}`}
                                    />
                                </label>

                                <label className="input input-bordered flex items-center gap-2">
                                    <MdEmail />
                                    <input
                                        type="email"
                                        className="grow"
                                        placeholder="Email"
                                        value={`${userDetails ? userDetails.email : ' '}`}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>

    );
}
