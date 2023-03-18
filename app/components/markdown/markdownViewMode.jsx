"use client";

import Image from "next/image";
import { useState } from "react";
import MarkdownWrapper from "./markdownWrapper";
import MarkdownEditor from "./markdownEditor";
import ClosedEye from "../svgs/closedEye";
import OpenedEye from "../svgs/openedEye";

export default function MarkdownViewMode() {
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    return (
        <main style={{ height: "calc(100vh - 56px)" }} className="relative">
            <div className="h-full flex flex-col">
                <div className="flex-none bg-gray-100 w-screen dark:bg-gray-800 py-[14px] px-[16px] flex justify-between">
                    <h2 className="font-roboto font-medium text-gray-400 dark:text-gray-300 tracking-[2px] text-[14px]">
                        MARKDOWN
                    </h2>

                    <button onClick={() => setIsViewerOpen(true)}>
                        <OpenedEye></OpenedEye>
                    </button>
                </div>

                <MarkdownEditor></MarkdownEditor>
            </div>

            <div
                className={`w-full flex flex-col h-full absolute z-10 top-0 transition-all ${
                    isViewerOpen ? "left-0" : "left-full"
                }`}
            >
                <div className="flex-none w-screen bg-gray-100 dark:bg-gray-800 py-[14px] px-[16px] flex justify-between">
                    <h2 className="font-roboto font-medium text-gray-400 dark:text-gray-300 tracking-[2px] text-[14px]">
                        PREVIEW
                    </h2>

                    <button onClick={() => setIsViewerOpen(false)}>
                        <ClosedEye></ClosedEye>
                    </button>
                </div>

                <MarkdownWrapper></MarkdownWrapper>
            </div>
        </main>
    );
}
