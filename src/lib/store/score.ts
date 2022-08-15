import { writable } from "svelte/store";

export const createScore = () => {
    const scores = {
        coins: 0,
        score: 0,
    }

    const { subscribe, set, update } = writable(scores);

    const increaseScore = (coins: number) => update(scores => ({
        ...scores, coins: (scores.coins || 1) * coins
    }));

    const applyScore = () => update(scores => ({
        coins: 0,
        score: scores.score + scores.coins
    }));

    const reset = () => set(scores);

    return {
        subscribe,
        increaseScore,
        applyScore,
        reset
    }
}