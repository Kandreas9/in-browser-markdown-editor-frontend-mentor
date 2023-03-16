import Image from "next/image";
import file from "../../../public/file.svg";
import { useContext } from "react";
import { Docs } from "@/app/context/context";

export default function FileRename() {
    const { docs, documents, setDocs } = useContext(Docs);

    return (
        <div className="flex min-w-fit gap-[1rem] mx-[24px] my-auto">
            <Image alt="file" src={file} width={14} height={16}></Image>
            <label className="text-gray-400">
                <span className="hidden">Document Name</span>
                <input
                    className="
                        bg-transparent 
                        font-roboto 
                        font-bold 
                        text-[15px] 
                        text-white w-[86px] 
                        focus:border-b-[1px] 
                        hover:border-b-[1px] 
                        focus:border-b-white 
                        hover:border-b-white
                        outline-0
                    "
                    type="text"
                    value={docs.name}
                    onChange={(e) => setDocs({ ...docs, name: e.target.value })}
                    placeholder="welcome.md"
                />
            </label>
        </div>
    );
}
