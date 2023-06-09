import Image from "next/image";
import file from "../../../public/file.svg";
import { useContext } from "react";
import { Docs } from "@/app/context/context";

export default function FileRename() {
    const { docs, documents, setDocs } = useContext(Docs);

    return (
        <div className="flex flex-1 items-center min-w-fit gap-[1rem] px-[24px] my-auto border-l border-gray-500">
            <Image className="h-[16px] w-[14px]" alt="file" src={file}></Image>
            <label className="text-gray-400 flex-1">
                <span className="hidden md:block font-roboto font-light text-[13px]">
                    Document Name
                </span>
                <input
                    style={{ width: "-webkit-fill-available" }}
                    className="
                        bg-transparent 
                        font-roboto 
                        font-bold 
                        text-[15px] 
                        text-white 
                        w-auto 
                        focus:border-b-[1px] 
                        hover:border-b-[1px] 
                        focus:border-b-white 
                        hover:border-b-white
                        outline-0
                    "
                    type="text"
                    value={`${docs.name}.md`}
                    onChange={(e) =>
                        setDocs({
                            ...docs,
                            name: e.target.value.replace(".md", ""),
                        })
                    }
                    placeholder="welcome.md"
                />
            </label>
        </div>
    );
}
