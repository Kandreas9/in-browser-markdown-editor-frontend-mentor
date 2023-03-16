"use client";

import { useContext } from "react";
import { Docs } from "@/app/context/context";

import {
    Editor,
    rootCtx,
    defaultValueCtx,
    editorViewOptionsCtx,
} from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { Milkdown, useEditor } from "@milkdown/react";
import { commonmark } from "@milkdown/preset-commonmark";

export default function MarkdownViewer() {
    const { docs } = useContext(Docs);

    const { editor } = useEditor((root) =>
        Editor.make()
            .config(nord)
            .config((ctx) => {
                ctx.set(rootCtx, root);
                ctx.set(defaultValueCtx, docs.content);
                ctx.update(editorViewOptionsCtx, (prev) => ({
                    ...prev,
                    editable: false,
                }));
            })
            .use(commonmark)
    );

    return <Milkdown />;
}
