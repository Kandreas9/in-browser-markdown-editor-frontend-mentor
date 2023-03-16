"use client";

import { Roboto, Roboto_Slab, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = (bool) => {
        setIsMenuOpen(bool);
    };

    return (
        <html
            className={`${roboto.variable} ${robotoSlab.variable} ${robotoMono.variable}`}
            lang="en"
        >
            <body className="bg-gray-900 text-white flex ">
                <Context>
                    <Sidebar isMenuOpen={isMenuOpen}></Sidebar>

                    <div className="overflow-x-hidden w-screen">
                        <Header
                            handleMenuClick={handleMenuClick}
                            isMenuOpen={isMenuOpen}
                        ></Header>
                        {children}
                    </div>
                </Context>
            </body>
        </html>
    );
}
