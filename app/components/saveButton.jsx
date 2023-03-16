import Image from "next/image";
import save from "../../public/save.svg";
import { Docs } from "../context/context";
import { useContext } from "react";

export default function SaveButton() {
    const { docs, saveDocument } = useContext(Docs);

    return (
        <button
            onClick={() => saveDocument(docs)}
            className="flex items-center gap-[0.5rem] rounded-[4px] bg-orange-200 p-[12px] hover:bg-orange-100"
        >
            <Image alt="save" src={save} height={16} width={16} />
            <span className="hidden">Save Changes</span>
        </button>
    );
}
