"use client";

import MarkdownViewer from "./markdownViewer";
import { MilkdownProvider } from "@milkdown/react";

export default function MarkdownWrapper() {
    return (
        <MilkdownProvider>
            <MarkdownViewer />
        </MilkdownProvider>
    );
}
