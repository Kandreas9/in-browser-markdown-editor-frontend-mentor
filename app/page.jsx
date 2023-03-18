"use client";

import MarkdownViewMode from "./components/markdown/markdownViewMode";
import { useContext, useEffect } from "react";
import { Docs } from "./context/context";

export default function NewDocument() {
    const { setDocs } = useContext(Docs);

    useEffect(() => {
        setDocs({
            name: "Untitled Document",
            content: "# Welcome to Markdown",
        });
    }, []);

    return (
        <>
            <MarkdownViewMode></MarkdownViewMode>
        </>
    );
}
