import Image from "next/image";
import md from "../../../public/md.svg";
import { useContext } from "react";
import { Docs } from "@/app/context/context";
import SidebarContent from "./sidebarDocument";
import AddDocumentButton from "../addDocumentButton";

export default function Sidebar({ isMenuOpen }) {
    const { documents } = useContext(Docs);
    console.log(documents);

    return (
        <aside
            className={`bg-gray-800 h-screen flex-none transition-width ${
                !isMenuOpen ? "w-0" : "w-[250px]"
            }`}
        >
            {isMenuOpen && (
                <div className="px-[24px]">
                    <h1 className="my-[27px]">
                        <Image
                            alt="logo"
                            src={md}
                            height={18}
                            width={131}
                        ></Image>
                    </h1>

                    <div className="mb-[29px]">
                        <h2 className="text-gray-400 font-roboto text-[14px]">
                            MY DOCUMENTS
                        </h2>
                    </div>

                    <AddDocumentButton></AddDocumentButton>

                    <ul className="mt-[24px] flex flex-col gap-[26px]">
                        {documents &&
                            documents.map((el) => {
                                return (
                                    <SidebarContent
                                        key={el.id}
                                        document={el}
                                    ></SidebarContent>
                                );
                            })}
                    </ul>
                </div>
            )}
        </aside>
    );
}
