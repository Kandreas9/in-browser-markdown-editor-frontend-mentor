import Link from "next/link";
import Image from "next/image";
import file from "../../../public/file.svg";

export default function SidebarContent({ document }) {
    return (
        <li>
            <Link className="flex gap-[16px]" href={`/${document.id}`}>
                <Image alt="file" src={file} height={16} width={14}></Image>
                <div className="flex flex-col gap-[3px]">
                    <span className="font-roboto text-gray-400 text-[13px]">
                        {document.date.getYear()}
                    </span>
                    <span className="text-white text-[15px] font-roboto">
                        {document.name}
                    </span>
                </div>
            </Link>
        </li>
    );
}
