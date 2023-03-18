import { createPortal } from "react-dom";
import { useState, useEffect, useContext } from "react";
import { Docs } from "@/app/context/context";
import { useRouter } from "next/navigation";

export default function DeleteModal({ handleModalChange }) {
    const { docs, setDocs, deleteDocument } = useContext(Docs);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);

        return () => setMounted(false);
    }, []);

    const handleDeleteClick = () => {
        if (docs.id) {
            deleteDocument(docs.id);
        }
        setDocs({
            name: "Untitled Document",
            content: "# Welcome to Markdown",
        });
        handleModalChange(false);
        router.push("/");
    };

    return mounted
        ? createPortal(
              <>
                  <div
                      onClick={() => handleModalChange(false)}
                      className="absolute bg-gray-400 top-0 left-0 w-screen h-screen opacity-50"
                  ></div>
                  <section className="flex flex-col gap-[16px] p-[24px] rounded-[4px] w-[343px] h-[218px] z-20 bg-gray-800 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                      <h2 className="text-white font-robotoSlab text-[20px]">
                          Delete this document?
                      </h2>

                      <p className="font-robotoSlab text-[14px] text-gray-300 leading-[24px]">
                          Are you sure you want to delete the ‘{docs.name}.md’
                          document and its contents? This action cannot be
                          reversed.
                      </p>

                      <button
                          onClick={handleDeleteClick}
                          className="bg-orange-200 py-[10px] text-[15px] rounded-[4px]"
                      >
                          Confirm & Delete
                      </button>
                  </section>
              </>,
              document.querySelector("#portal")
          )
        : null;
}
