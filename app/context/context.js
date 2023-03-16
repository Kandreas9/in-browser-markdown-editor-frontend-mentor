import { createContext, useState } from "react";
import { documentTable } from "../database/database.config";
import { useLiveQuery } from "dexie-react-hooks";

export const Docs = createContext(null);

function Context({ children }) {
    const [docs, setDocs] = useState({
        name: "Untitled Document",
        content: "",
    });
    const documents = useLiveQuery(() => documentTable.toArray());

    const saveDocument = async (doc) => {
        try {
            if (documents && doc.name == documents[0].name) {
                await documentTable.add(doc);
            } else {
                await documentTable.add({ ...doc, date: new Date() });
            }
        } catch (err) {
            console.error(`Failed to add document: ${err}`);
        }
    };

    return (
        <Docs.Provider value={{ documents, saveDocument, docs, setDocs }}>
            {children}
        </Docs.Provider>
    );
}

export default Context;
