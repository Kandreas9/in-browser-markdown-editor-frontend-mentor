import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Moon from "./svgs/moon";
import Sun from "./svgs/sun";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <div className="flex gap-[10px] py-[32px] items-center">
            <Moon></Moon>

            <button
                className={`flex bg-gray-500 p-[6px] w-[48px] h-[24px] rounded-[14.5px]`}
                onClick={toggleTheme}
            >
                <div
                    className={`bg-white transition-all w-[12px] h-[12px] rounded-[50%] ${
                        theme === "light" ? "translate-x-[200%]" : ""
                    }`}
                ></div>
            </button>

            <Sun></Sun>
        </div>
    );
}
