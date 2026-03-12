export const presets = {
    editorPreview: {
        type: "group",
        direction: "row",
        sizes: [60, 40],
        children: [
            { type: "panel", id: "editor" },
            { type: "panel", id: "preview" }
        ]
    },

    ide: {
        type: "group",
        direction: "row",
        sizes: [20, 60, 20],
        children: [
            { type: "panel", id: "sidebar" },
            { type: "panel", id: "editor" },
            { type: "panel", id: "console" }
        ]
    }
}