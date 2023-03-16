"use client";

import { useContext, useEffect } from "react";
import { Docs } from "@/app/context/context";

import {
    Editor,
    rootCtx,
    defaultValueCtx,
    editorViewOptionsCtx,
} from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { Milkdown, useEditor } from "@milkdown/react";
import { replaceAll } from "@milkdown/utils";
import { commonmark } from "@milkdown/preset-commonmark";
// import { listener, listenerCtx } from "@milkdown/plugin-listener";

export default function MarkdownViewer() {
    const { docs } = useContext(Docs);

    const editor = useEditor((root) =>
        Editor.make()
            .config(nord)
            .config((ctx) => {
                ctx.set(rootCtx, root);
                ctx.set(defaultValueCtx, docs.content);
                ctx.update(editorViewOptionsCtx, (prev) => ({
                    ...prev,
                    attributes: {
                        class: "flex-1 h-full prose dark:prose-invert font-robotoSlab",
                    },
                    editable: () => false,
                }));
            })
            .use(commonmark)
    );

    useEffect(() => {
        if (editor.loading === false) {
            editor.get().action(replaceAll(docs.content));
        }
    }, [docs, editor]);

    return <Milkdown />;
}
