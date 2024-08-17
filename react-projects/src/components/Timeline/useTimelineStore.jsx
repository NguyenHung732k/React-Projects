import { create } from 'zustand'

const useTimelineStore = create((set) => ({
    selectedEvent: null,
    setSelectedEvent: (event) => set({ selectedEvent: event }),
    clearSelectedEvent: () => set({ selectedEvent: null }),
}))

export default useTimelineStore