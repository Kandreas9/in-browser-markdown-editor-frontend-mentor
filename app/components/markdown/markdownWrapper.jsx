"use client";

import MarkdownViewer from "./markdownViewer";
import { MilkdownProvider } from "@milkdown/react";
import { useState, useEffect } from "react";

export default function MarkdownWrapper() {
    const [isClient, setIsClient] = useState(false);

    // Wait until after client-side hydration to show
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <MilkdownProvider>{isClient && <MarkdownViewer />}</MilkdownProvider>
    );
}
