'use client'

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, use } from "react";
import { verifyService, logoutService } from "@/services/auth";

export default function DefaultNavbar() {

    const router = useRouter();
    const pathname = usePathname();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState<string | null>(null);
    
    const isProtectedPage = pathname === "/home" || pathname === "/task";

    useEffect(() => {
        if (!isProtectedPage) return;

        verifyService().then(result => {
            if (result.success) {
                setIsLoggedIn(true);
                setUsername(result.username || null);
            }
        });
    }, [pathname]);

    const handleNavbar = () => {
        router.push("/");
    };

    const handleLogout = async () => {
        await logoutService();
        setIsLoggedIn(false);
        setUsername(null);
        router.push("/");
    }

    return (
        <div className="fixed top-0 left-0 right-0 flex items-center bg-[#ECEFE2] h-17 px-8">
            <div className="flex items-center cursor-pointer" onClick={handleNavbar}>
                <img
                    src="/sticky-note.png"
                    alt="Logo"
                    className="h-10 w-10 mr-3"
                />
                
                <h1 className="text-lg font-semibold text-[#757575]">Maa's Notes</h1>
            </div>

            {/* {showUserText && (
                <div className="ml-auto">
                    <h2 className="text-lg font-medium">Hi, Rahma!</h2>
                </div>
            )} */}

            {isProtectedPage && isLoggedIn && username && (
                <div className="ml-auto flex items-center gap-10 pr-2">
                    <h2 className="text-x font-semibold text-[#757575]">Hi, {username}!</h2>
                    <button
                        onClick={handleLogout}
                        className="text-l underline text-[#757575] hover:text-[#757575] cursor-pointer transition-colors"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}