<script lang="ts">
    import type { PokemonCell } from "$lib/types";

    import { createEventDispatcher } from "svelte";

    export let cell: PokemonCell;

    $: isFlipped = cell.isFlipped;
    $: isMarked = cell.isMarked;

    const dispatch = createEventDispatcher();

    const flip = () => {
        if (isFlipped !== true) {
            dispatch("flip");
        }
    };

    const mark = (event: Event) => {
        if (isFlipped !== true) {
            event.preventDefault();
            dispatch("mark");
        }
    };
</script>

<section
    class:isFlipped
    class:isMarked={isMarked && !isFlipped}
    on:click={flip}
    on:contextmenu={mark}
>
    <div class="voltorb-flip-background">
        <div class="background-case" />
        <div class="background-case" />
        <div class="background-case" />
        <div class="background-case" />
        <div class="background-case" />
        <div class="background-case" />
        <div class="background-case" />
        <div class="background-case" />
        <div class="background-case" />
    </div>
    {#if isFlipped}
        {#if cell.id === 0}
            <img src="voltorb.png" alt="voltorb" />
        {:else}
            {cell.id}
        {/if}
    {/if}
</section>

<style>
    section {
        cursor: pointer;
        display: flex;
        place-content: center;
        place-items: center;
        font-size: 2em;

        height: 2em;
        width: 2em;
        border: 1px solid black;
        border-radius: 2px;
        outline: 3px solid white;

        transform: rotateY(180deg);
        transition: transform 0.2s ease-in-out;
        position: relative;
        box-shadow: inset 0 0 0 2px var(--dark-green);
    }

    section:not(.isFlipped):hover {
        transform: rotateY(180deg) scale(1.2);
        outline: 3px solid var(--border-color);
        transition: transform 0.2s ease-in-out;
    }

    img {
        height: auto;
        width: 1em;
        image-rendering: pixelated;
    }

    .isFlipped {
        transform: rotateY(0deg);
        transition: transform 0.2s ease-in-out;
        background-color: var(--cell-color);
        text-shadow: 1px 1px 1px white;
        box-shadow: inset 0 0 3px 3px var(--cell-shadow);
    }

    .isMarked {
        outline: 3px solid var(--yellow);
    }

    .voltorb-flip-background {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    }

    section:not(.isFlipped) .background-case:nth-child(2n) {
        background-color: hsl(152, 60%, 39%);
    }

    section:not(.isFlipped) .background-case:nth-child(2n + 1) {
        background-color: hsl(162, 68%, 30%);
    }

    section.isMarked .background-case:nth-child(2n) {
        background-color: var(--cell-marked-color);
    }

    section.isMarked .background-case:nth-child(2n + 1) {
        background-color: var(--cell-marked-color-2);
    }
</style>
