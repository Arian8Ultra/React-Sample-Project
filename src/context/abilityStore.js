 // @ts-nocheck
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useAbilityStore = create(
    persist(
        (set, get) => ({
            abilities: ['edit'],
            addAbility: (/** @type {any} */ string) => set({ abilities: abilities.push(string) }),
            addAbilityArray: (/** @type {any} */ array) => set({ abilities: abilities.concat(array) }),
        }),
        {
            name: "LayoutStore",
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);

export default useAbilityStore;