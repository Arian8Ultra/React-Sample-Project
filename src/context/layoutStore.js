import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useLayoutStore = create(
    persist(
      (set, get) => ({
        openSidebar: false,
        SidebarWidth: 20,
        pageName: "",
        changeSidebar: () => set({ openSidebar: !get().openSidebar }),
        changeSidebarWidth: (/** @type {String} */ newSize) => set({ SidebarWidth: newSize }),
        changePageName: (/** @type {String} */ newName) => set({ pageName: newName }),
      }),
      {
        name: "LayoutStore",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  );

export default useLayoutStore;