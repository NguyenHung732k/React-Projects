import { create } from "zustand"

export const useLayoutStore = create((set) => ({
    layout: null,

    setLayout: (layout) => set({ layout }),

    setActiveTab: (panelId, tabId) =>
        set((state) => {
            const panel = findPanel(state.layout, panelId)
            panel.activeTab = tabId
            return { layout: { ...state.layout } }
        }),
}))