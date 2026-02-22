'use client'

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function DefaultNavbar() {

    const router = useRouter();
    const pathname = usePathname();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleNavbar = () => {
        router.push("/");
    };

    return (
        <div className="fixed top-0 left-0 right-0 flex items-center bg-[#ECEFE2] h-17 px-8">
            <div className="flex items-center cursor-pointer" onClick={handleNavbar}>
                <img
                    src="/sticky-note.png"
                    alt="Logo"
                    className="h-10 w-10 mr-3"
                />
                
                <h1 className="text-lg font-medium">Maa's Notes</h1>
            </div>

            {/* {showUserText && (
                <div className="ml-auto">
                    <h2 className="text-lg font-medium">Hi, Rahma!</h2>
                </div>
            )} */}
        </div>
    );
}