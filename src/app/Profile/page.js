"use client";
import { useEffect, useState } from "react"
import { auth, db } from "../core/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Profile() {

    const [userDetaills, setUserDetails] = useState(null);
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            const docRef = doc(db, 'Users', user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log(docSnap.data());
            } else {
                console.log('Usser is not logged in!');
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
            console.log('Something wen wrong');
        }
    }
    return (
        <div>
            {userDetaills ? (
                <>
                    <div>Profil użytkownika </div>
                    <span>{userDetaills.name}</span>
                    <button className="btn" onClick={handleLogout}>Log Out</button>
                </>

            ) : <p>Loading...</p>}

        </div>
    )
}