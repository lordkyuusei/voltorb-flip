<script lang="ts">
    import { score } from "$lib/store/exports";
</script>

<section>
    <div class="score-label">
        🪙{$score.coins}
    </div>
    <div class="score-value">
        {$score.score.toString().padStart(4, "0")}
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        place-content: center;
        place-items: center;
        font-size: 1.5em;
        font-weight: bolder;

        height: 2.75em;
        width: 2.75em;
        border-radius: 2px;
        outline: 3px solid white;
    }

    .score-label,
    .score-value {
        display: flex;
        font-size: 0.75em;
        align-items: center;
        place-content: space-around;
        width: 100%;
    }

    .score-label {
        border-bottom: 3px solid white;
    }

    .score-value {
        height: 100%;
    }
</style>
