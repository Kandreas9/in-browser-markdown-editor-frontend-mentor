"use client";

import { useContext, useEffect } from "react";
import { Docs } from "../context/context";
import MarkdownViewMode from "../components/markdown/markdownViewMode";

export default function Home({ params }) {
    const { docs, documents, setDocs } = useContext(Docs);

    useEffect(() => {
        const doc = documents.find((e) => e.id == params.id);
        if (doc) {
            console.log("Actual update", doc);
            setDocs(doc);
        }
    }, [documents]);

    return <MarkdownViewMode></MarkdownViewMode>;
}
