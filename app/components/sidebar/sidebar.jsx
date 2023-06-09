import Image from "next/image";
import md from "../../../public/md.svg";
import { useContext } from "react";
import { Docs } from "@/app/context/context";
import SidebarContent from "./sidebarDocument";
import AddDocumentButton from "../addDocumentButton";
import ThemeSwitcher from "../themeSwither";

export default function Sidebar({ isMenuOpen }) {
    const { documents } = useContext(Docs);

    return (
        <aside
            className={`bg-gray-800 overflow-hidden h-screen flex-none transition-width ${
                !isMenuOpen ? "w-0" : "w-[250px]"
            }`}
        >
            {isMenuOpen && (
                <div className="px-[24px] w-[250px] h-full flex flex-col justify-between pt-[27px]">
                    <div>
                        <h1 className="pb-[27px] xl:hidden">
                            <Image
                                alt="logo"
                                src={md}
                                height={18}
                                width={131}
                            ></Image>
                        </h1>

                        <div className="mb-[29px]">
                            <h2 className="text-gray-400 font-medium font-roboto text-[14px]">
                                MY DOCUMENTS
                            </h2>
                        </div>

                        <AddDocumentButton></AddDocumentButton>

                        <ul className="mt-[24px] flex flex-col gap-[26px] overflow-y-auto">
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
                    <ThemeSwitcher></ThemeSwitcher>
                </div>
            )}
        </aside>
    );
}
