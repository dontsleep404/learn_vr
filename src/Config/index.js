import { create } from "zustand"

const useSkyBox = create((set) => ({
    path: 0,
    setPath: () => set((state) => ({ path: (state.path + 1) % 2 })),
}))

export {
    useSkyBox
}