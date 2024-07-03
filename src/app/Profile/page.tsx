"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../core/firebase";
import { doc, getDoc } from "firebase/firestore";

interface UserDetails {
    name: string;
    email: string
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
        <div className="min-h-screen">
            {userDetails ? (
                <>
                    <div>Profil użytkownika</div>
                    <span>{userDetails.name}</span>
                    <button className="btn" onClick={handleLogout}>Log Out</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
