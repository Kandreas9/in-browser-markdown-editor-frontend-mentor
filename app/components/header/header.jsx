import Image from "next/image";
import menu from "../../../public/menu.svg";
import exit from "../../../public/exit.svg";
import trash from "../../../public/trash.svg";
import FileRename from "./fileRename";
import SaveButton from "../saveButton";

export default function Header({ handleMenuClick, isMenuOpen }) {
    return (
        <header className="flex bg-gray-700 w-screen">
            {isMenuOpen ? (
                <button
                    onClick={() => handleMenuClick(false)}
                    className="w-[56px] h-[56px] p-[19px] bg-gray-600 flex-none"
                >
                    <Image alt="exit" src={exit} height={18} width={18}></Image>
                </button>
            ) : (
                <button
                    onClick={() => handleMenuClick(true)}
                    className="w-[56px] h-[56px] py-[21px] px-[17px] bg-gray-600 flex-none"
                >
                    <Image alt="menu" src={menu} height={13} width={23}></Image>
                </button>
            )}

            <div className="flex flex-1 justify-between items-center">
                <FileRename></FileRename>

                <div className="flex gap-[24px] mr-[8px]">
                    <Image
                        alt="trash"
                        src={trash}
                        height={20}
                        width={18}
                    ></Image>

                    <SaveButton></SaveButton>
                </div>
            </div>
        </header>
    );
}
