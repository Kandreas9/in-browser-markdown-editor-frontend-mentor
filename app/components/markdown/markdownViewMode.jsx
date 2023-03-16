"use client";

import Image from "next/image";
import openEye from "../../../public/open-eye.svg";
import { useState } from "react";

export default function MarkdownViewMode() {
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    return (
        <main
            style={{ height: "calc(100vh - 56px)" }}
            className="flex flex-col"
        >
            <div className="flex-none bg-gray-800 py-[14px] px-[16px] flex justify-between">
                <h2 className="font-roboto font-medium text-gray-300 tracking-[2px]">
                    MARKDOWN
                </h2>

                <button>
                    <Image
                        alt="View Markdown"
                        src={openEye}
                        height={11}
                        width={16}
                    ></Image>
                </button>
            </div>

            <div className="flex-1">
                <textarea className="leading-[24px] w-full h-full bg-transparent outline-none p-[16px] font-robotoMono font-regular text-[14px] text-gray-300"></textarea>
            </div>
        </main>
    );
}
