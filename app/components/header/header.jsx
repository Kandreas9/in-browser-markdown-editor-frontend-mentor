import Image from "next/image";
import menu from "../../../public/menu.svg";
import exit from "../../../public/exit.svg";
import trash from "../../../public/trash.svg";
import FileRename from "./fileRename";
import SaveButton from "../saveButton";
import md from "../../../public/md.svg";

import { useState } from "react";
import DeleteModal from "../modal/deleteModal";

export default function Header({ handleMenuClick, isMenuOpen }) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleModalChange = (bool) => {
        setIsDeleteModalOpen(bool);
    };

    return (
        <header className="flex bg-gray-700 w-screen">
            {isMenuOpen ? (
                <button
                    onClick={() => handleMenuClick(false)}
                    className="w-[56px] h-[56px] md:h-[72px] md:w-[72px] p-[19px] md:py-[25px] md:px-[25px] bg-gray-600 flex-none"
                >
                    <Image
                        className="md:h-[23px] md:w-[23px]"
                        alt="exit"
                        src={exit}
                    ></Image>
                </button>
            ) : (
                <button
                    onClick={() => handleMenuClick(true)}
                    className="w-[56px] h-[56px] md:h-[72px] md:w-[72px] py-[21px] px-[17px] md:px-[21px] md:py-[27px] bg-gray-600 flex-none"
                >
                    <Image
                        className="md:h-[18px] md:w-[30px]"
                        alt="menu"
                        src={menu}
                    ></Image>
                </button>
            )}

            <div className="flex flex-1 justify-between items-center">
                <h1 className="xl:pl-[24px] xl:pr-[29px] hidden xl:block ">
                    <Image
                        className="xl:h-[18px] xl:w-[131px]"
                        alt="logo"
                        src={md}
                    ></Image>
                </h1>

                <FileRename></FileRename>

                <div className="flex gap-[24px] mr-[8px]">
                    <button onClick={() => handleModalChange(true)}>
                        <Image
                            alt="trash"
                            src={trash}
                            height={20}
                            width={18}
                        ></Image>
                    </button>

                    <SaveButton></SaveButton>
                </div>
            </div>

            {isDeleteModalOpen && (
                <DeleteModal
                    handleModalChange={handleModalChange}
                ></DeleteModal>
            )}
        </header>
    );
}
