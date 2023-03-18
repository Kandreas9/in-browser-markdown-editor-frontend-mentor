"use client";

import { useState } from "react";
import MarkdownWrapper from "./markdownWrapper";
import MarkdownEditor from "./markdownEditor";
import ClosedEye from "../svgs/closedEye";
import OpenedEye from "../svgs/openedEye";

export default function MarkdownViewMode() {
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    return (
        <main className="markdownViewer md:flex relative w-screen max-w-[1440px] mx-auto">
            <div className="h-full w-full md:w-1/2 flex flex-col border-r dark:border-gray-500 border-gray-200">
                <div className="flex-none bg-gray-100 w-full dark:bg-gray-800 py-[14px] px-[16px] flex justify-between">
                    <h2 className="font-roboto font-medium text-gray-400 dark:text-gray-300 tracking-[2px] text-[14px]">
                        MARKDOWN
                    </h2>

                    <button
                        className="md:hidden"
                        onClick={() => setIsViewerOpen(true)}
                    >
                        <OpenedEye></OpenedEye>
                    </button>
                </div>

                <MarkdownEditor></MarkdownEditor>
            </div>

            <div
                className={`w-full md:w-1/2 flex flex-col h-full absolute z-10 top-0 transition-all ${
                    isViewerOpen ? "left-0 md:w-full" : "left-full md:left-1/2"
                }`}
            >
                <div className="flex-none w-full bg-gray-100 dark:bg-gray-800 py-[14px] px-[16px] flex justify-between">
                    <h2 className="font-roboto font-medium text-gray-400 dark:text-gray-300 tracking-[2px] text-[14px]">
                        PREVIEW
                    </h2>

                    {isViewerOpen ? (
                        <button onClick={() => setIsViewerOpen(false)}>
                            <ClosedEye></ClosedEye>
                        </button>
                    ) : (
                        <button onClick={() => setIsViewerOpen(true)}>
                            <OpenedEye></OpenedEye>
                        </button>
                    )}
                </div>

                <MarkdownWrapper></MarkdownWrapper>
            </div>
        </main>
    );
}
