import { createContext, useState } from "react";
import database from "../database/database.config";
import { documentTable } from "../database/database.config";
import { useLiveQuery } from "dexie-react-hooks";
import { useRouter } from "next/navigation";

export const Docs = createContext(null);

function Context({ children }) {
    const router = useRouter();
    const [docs, setDocs] = useState({
        name: "Untitled Document",
        content: "# Welcome to Markdown",
    });
    const documents = useLiveQuery(() => documentTable.toArray());

    const saveDocument = async (doc) => {
        try {
            if (documents.find((e) => e.id == doc.id)) {
                await database.documents.update(doc.id, doc);

                router.push(`/${doc.id}`);
            } else {
                const newId = await documentTable.add({
                    ...doc,
                    date: new Date(),
                });
                //get collection and then last so i can push to the new added item id
                router.push(`/${newId}`);
            }
        } catch (err) {
            console.error(`Failed to add document: ${err}`);
        }
    };

    const deleteDocument = async (id) => {
        documentTable.delete(id);
    };

    if (!documents) return null;

    return (
        <Docs.Provider
            value={{ documents, saveDocument, deleteDocument, docs, setDocs }}
        >
            {children}
        </Docs.Provider>
    );
}

export default Context;
