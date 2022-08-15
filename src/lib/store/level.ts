import { writable } from "svelte/store";

export const createLevel = () => {
    const level: number = 1;

    const { subscribe, set, update } = writable(level);

    const increaseLevel = () => update(level => level + 1);
    const reset = () => set(level);

    return {
        subscribe,
        increaseLevel,
        reset
    }
}