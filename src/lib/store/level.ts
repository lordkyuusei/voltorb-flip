import { writable } from "svelte/store";

export const createLevel = () => {
    const firstLevel: number = 1;

    const { subscribe, set, update } = writable(firstLevel);

    const increaseLevel = () => update(level => level + 1);
    const reset = (level: number) => set(level);

    return {
        subscribe,
        increaseLevel,
        reset
    }
}