<script context="module">
    export const prerender = true;
</script>

<script lang="ts">
    import { dev } from "$app/env";
    import { derived } from "svelte/store";

    import GameOver from "./GameOver.svelte";
    import FlipCase from "./FlipCase.svelte";
    import HintCase from "./HintCase.svelte";
    import ScoreCase from "./ScoreCase.svelte";

    import { game, score, level, isWon } from "$lib/store/exports";

    $: board_game = derived(game, ($) => $);

    $: {
        if ($isWon === true) {
            showOverScreen = true;
        }
    }

    let showOverScreen: boolean = false;

    const handleFlip = (coins: number, row: number, col: number) => {
        if (showOverScreen) return;

        game.flip(col, row);

        if (coins === 0) {
            showOverScreen = true;
        } else {
            score.increaseScore(coins);
        }
    };

    const handleMark = (row: number, col: number) => {
        game.mark(col, row);
    };

    const handleClose = () => {
        showOverScreen = false;

        if ($isWon) {
            score.applyScore();
            level.increaseLevel();
        } else {
            score.reset();
        }

        game.reveal();
        game.reset($level);
    };

    const __solve = () => {
        game.reveal();
    };
</script>

<section>
    {#if showOverScreen}
        <GameOver on:close={handleClose} />
    {/if}
    <div class="voltorb-board">
        {#each $board_game as row, index_row}
            <div class="voltorb-row row-{index_row}">
                {#each row as cell, index_col}
                    <FlipCase
                        {cell}
                        on:flip={() =>
                            handleFlip(cell.id, index_row, index_col)}
                        on:mark={() => handleMark(index_row, index_col)}
                    />
                {/each}
                <HintCase
                    values={game.getRowSums($board_game, index_row)}
                    color={index_row}
                />
            </div>
        {/each}
        <div class="voltorb-lines-background-horizontal">
            {#each $board_game as _}
                <div class="voltorb-line line-horizontal" />
            {/each}
        </div>
        <div class="voltorb-lines-background-vertical">
            {#each $board_game as _}
                <div class="voltorb-line line-vertical" />
            {/each}
        </div>
    </div>
    <div class="voltorb-last-row">
        {#each $board_game as row, index}
            <HintCase
                values={game.getColumnSums($board_game, index)}
                color={index}
            />
        {/each}
        <ScoreCase />
    </div>
    {#if dev}
        <button on:click={__solve}>Solve</button>
    {/if}
</section>

<style>
    section {
        width: 100%;
        display: flex;
        gap: 1.5em;
        flex-direction: column;
        place-content: center;
        place-items: center;

        background-color: var(--light-green);
        position: relative;
        z-index: 0;
    }

    @media screen and (max-width: 480px) {
        section {
            font-size: 0.7em;
        }
    }

    @media screen and (max-width: 375px) {
        section {
            font-size: 0.6em;
        }
    }

    .voltorb-board {
        display: flex;
        flex-direction: column;
        place-content: center;
        place-items: center;
        gap: 1.5em;
        height: 100%;
        position: relative;
        z-index: 2;
    }

    .voltorb-row,
    .voltorb-last-row {
        width: 100%;
        display: flex;
        gap: 1.5em;
    }

    .voltorb-row {
        place-content: center;
        place-items: center;
    }

    .voltorb-last-row {
        place-content: center;
    }

    .voltorb-lines-background-horizontal,
    .voltorb-lines-background-vertical {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        z-index: -1;
        gap: 1.5em;
    }

    /* 5.6em because 5.5em (gap + size) and a few pixels for the outline */
    .voltorb-lines-background-vertical {
        flex-direction: row;
        top: 3em;
        width: calc(100% - 5.6em);
    }

    .voltorb-line {
        height: 1em;
        border: 3px solid white;
        background-color: hsl(236, 60%, 39%);
    }

    .line-horizontal {
        width: calc(100% - 1em);
        height: 1em;
    }

    .line-vertical {
        height: calc(100% - 1em);
        width: 1em;
    }

    .voltorb-line:nth-child(1) {
        background-color: hsl(13, 70%, 60%);
    }
    .voltorb-line:nth-child(2) {
        background-color: hsl(120, 45%, 45%);
    }

    .voltorb-line:nth-child(3) {
        background-color: hsl(35, 79%, 56%);
    }

    .voltorb-line:nth-child(4) {
        background-color: hsl(211, 93%, 58%);
    }

    .voltorb-line:nth-child(5) {
        background-color: hsl(285, 67%, 63%);
    }
</style>
