<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { isWon, score, level } from "$lib/store/exports";

    const dispatch = createEventDispatcher();

    const onClose = () => {
        dispatch("close");
    };
</script>

<section>
    <header>{$isWon ? "Victoire !" : "Perdu !"}</header>
    <div>
        {#if $isWon}
            Vous avez remporté <strong>{$score.coins}</strong>🪙 cette manche,
            pour un total de <strong>{$score.score + $score.coins}</strong>
            points.
            <br />
            <br />
            Avancée vers le niveau <strong>{$level + 1} !</strong>
        {:else}
            Vous avez retourné une <strong>mine Voltorbe</strong> et avez perdu
            vos
            <strong>{$score.coins}</strong>🪙.
            <br />
            <br />
            Retour au niveau <strong>1 !</strong>
        {/if}
    </div>
    <footer>
        <button on:click={onClose}>Continuer</button>
    </footer>
</section>

<style>
    section {
        position: absolute;
        top: 25%;
        height: 10em;
        width: 20em;
        background-color: white;
        border-radius: 0.5em;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1em;
    }

    header {
        font-size: 1.5em;
        font-weight: bolder;
        text-align: center;
    }

    footer {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
</style>
