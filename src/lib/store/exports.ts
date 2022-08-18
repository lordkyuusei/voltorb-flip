import { derived } from 'svelte/store';
import { createGame } from './game';
import { createLevel } from './level';
import { createScore } from './score';

export const game = createGame();
export const score = createScore();
export const level = createLevel();

export const isWon = derived(game, $game => {
    const values = $game.flatMap(row => row.filter(cell => ![0, 1].includes(cell.id)));
    return values.every(cell => cell.isFlipped);
})

export const flippedCards = derived(game, $game => {
    const values = $game.flatMap(row => row.filter(cell => cell.id !== 0 && cell.isFlipped));
    return values.length;
});