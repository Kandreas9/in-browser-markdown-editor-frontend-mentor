import { Docs } from "@/app/context/context";
import { useContext } from "react";

export default function MarkdownEditor() {
    const { docs, setDocs } = useContext(Docs);

    return (
        <div className="flex-1">
            <textarea
                value={docs.content}
                onChange={(e) => setDocs({ ...docs, content: e.target.value })}
                className="
                            border-none
                            resize-none
                            leading-[24px] 
                            w-full h-full 
                            bg-transparent 
                            outline-none 
                            p-[16px] 
                            font-robotoMono 
                            font-regular 
                            text-[14px] 
                            text-gray-600
                            dark:text-gray-300"
            ></textarea>
        </div>
    );
}
