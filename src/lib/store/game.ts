// setup svelte store
import { writable } from 'svelte/store';

import { MAP_SIZE, ODD_TABLE } from '$lib/constants';
import type { PokemonGame } from '$lib/types';

const generateGame = (level: number) => [...Array(MAP_SIZE)].map(() => ([
    { id: ODD_TABLE[level][Math.floor(Math.random() * 10)], isFlipped: false, isMarked: false },
    { id: ODD_TABLE[level][Math.floor(Math.random() * 10)], isFlipped: false, isMarked: false },
    { id: ODD_TABLE[level][Math.floor(Math.random() * 10)], isFlipped: false, isMarked: false },
    { id: ODD_TABLE[level][Math.floor(Math.random() * 10)], isFlipped: false, isMarked: false },
    { id: ODD_TABLE[level][Math.floor(Math.random() * 10)], isFlipped: false, isMarked: false },
]));

export const createGame = () => {
    const empty: PokemonGame = generateGame(0);

    const { subscribe, set, update } = writable(empty);

    const flip = (id: number, row: number) => update(game => {
        game[row][id].isFlipped = true
        return game;
    })

    const mark = (id: number, row: number) => update(game => {
        game[row][id].isMarked = !game[row][id].isMarked;
        return game;
    });

    const reveal = () => update(game => game.map(row => row.map(cell => ({ ...cell, isFlipped: true }))))

    const getColumnSums = (board: PokemonGame, col: number) => board.reduce((sum, row) => {
        row[col].id === 0 ? sum.voltorbs += 1 : sum.coins += row[col].id;
        return sum;
    }, {
        coins: 0, voltorbs: 0
    })

    const getRowSums = (board: PokemonGame, row: number) => board[row].reduce((sum, col) => {
        col.id === 0 ? sum.voltorbs += 1 : sum.coins += col.id;
        return sum;
    }, {
        coins: 0, voltorbs: 0
    });

    const reset = (level: number) => set(generateGame(level - 1));

    return {
        subscribe,
        flip,
        mark,
        reset,
        reveal,
        getColumnSums,
        getRowSums
    }
}