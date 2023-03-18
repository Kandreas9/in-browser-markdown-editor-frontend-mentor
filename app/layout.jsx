"use client";

import { Roboto, Roboto_Slab, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Context from "./context/context";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";

const roboto = Roboto({ weight: ["300", "400", "500"], variable: "--roboto" });
const robotoSlab = Roboto_Slab({
    weight: ["300", "400", "700"],
    variable: "--roboto-slab",
});
const robotoMono = Roboto_Mono({ weight: ["400"], variable: "--roboto-mono" });

export default function RootLayout({ children }) {
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = (bool) => {
        setIsMenuOpen(bool);
    };

    useEffect(() => {
        handleMenuClick(isMenuOpen ? false : isMenuOpen);
    }, [pathname]);

    return (
        <html
            className={`${roboto.variable} ${robotoSlab.variable} ${robotoMono.variable}`}
            lang="en"
        >
            <body className="bg-gray-900 text-white flex ">
                <Context>
                    <Sidebar
                        handleMenuClick={handleMenuClick}
                        isMenuOpen={isMenuOpen}
                    ></Sidebar>

                    <div className="overflow-hidden w-screen">
                        <Header
                            handleMenuClick={handleMenuClick}
                            isMenuOpen={isMenuOpen}
                        ></Header>
                        {children}
                    </div>

                    <div id="portal" />
                </Context>
            </body>
        </html>
    );
}
