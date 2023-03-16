"use client";

import { useContext, useEffect } from "react";
import { Docs } from "../context/context";

export default function Home({ params }) {
    const { docs, documents, setDocs } = useContext(Docs);

    useEffect(() => {
        if (documents) {
            const doc = documents.find((e) => e.id == params.id);
            if (doc) {
                setDocs(doc);
            }
        }
    }, [documents]);

    return <div className="font-robotoSlab">{docs.name}</div>;
}
