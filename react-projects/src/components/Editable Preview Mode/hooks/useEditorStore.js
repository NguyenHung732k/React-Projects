import { create } from "zustand"

export const useEditorStore = create((set) => ({
    page: null,
    editingId: null,
    dirty: false,

    setEditing: (id) => set({ editingId: id }),

    updateContent: (sectionId, key, value) =>
        set((state) => ({
            dirty: true,
            page: {
                ...state.page,
                sections: state.page.sections.map((s) =>
                    s.id === sectionId
                        ? { ...s, content: { ...s.content, [key]: value } }
                        : s
                )
            }
        }))
}))