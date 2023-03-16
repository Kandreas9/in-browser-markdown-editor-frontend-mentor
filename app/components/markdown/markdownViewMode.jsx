"use client";

import Image from "next/image";
import openEye from "../../../public/open-eye.svg";
import closedEye from "../../../public/close-eye.svg";
import { useState, useContext } from "react";
import { Docs } from "@/app/context/context";
import MarkdownWrapper from "./markdownWrapper";

export default function MarkdownViewMode() {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const { docs, setDocs } = useContext(Docs);

    return (
        <main style={{ height: "calc(100vh - 56px)" }} className="relative">
            <div className="h-full flex flex-col">
                <div className="flex-none bg-gray-800 py-[14px] px-[16px] flex justify-between">
                    <h2 className="font-roboto font-medium text-gray-300 tracking-[2px]">
                        MARKDOWN
                    </h2>

                    <button onClick={() => setIsViewerOpen(true)}>
                        <Image
                            alt="View Markdown"
                            src={openEye}
                            height={11}
                            width={16}
                        ></Image>
                    </button>
                </div>

                <div className="flex-1">
                    <textarea
                        value={docs.content}
                        onChange={(e) =>
                            setDocs({ ...docs, content: e.target.value })
                        }
                        className="
                            border-none
                            resize-none
                            leading-[24px] 
                            w-full h-full 
                            bg-transparent 
                            outline-none 
                            p-[16px] 
                            font-robotoMono 
                            font-regular 
                            text-[14px] 
                            text-gray-300"
                    ></textarea>
                </div>
            </div>

            <div
                className={`w-full flex flex-col h-full absolute z-10 top-0 transition-all ${
                    isViewerOpen ? "left-0" : "left-full"
                }`}
            >
                <div className="flex-none bg-gray-800 py-[14px] px-[16px] flex justify-between">
                    <h2 className="font-roboto font-medium text-gray-300 tracking-[2px]">
                        PREVIEW
                    </h2>

                    <button onClick={() => setIsViewerOpen(false)}>
                        <Image
                            alt="Unview Markdown"
                            src={closedEye}
                            height={11}
                            width={16}
                        ></Image>
                    </button>
                </div>

                <MarkdownWrapper></MarkdownWrapper>
            </div>
        </main>
    );
}
