import Link from "next/link";

export default function AddDocumentButton() {
    return (
        <Link href={"/"}>
            <button className="font-roboto inline text-[15px] rounded-[4px] bg-orange-200 py-[10px] px-[43px] hover:bg-orange-100">
                + New Document
            </button>
        </Link>
    );
}
