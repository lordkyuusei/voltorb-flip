<script lang="ts">
    export let values: { coins: number; voltorbs: number };
    export let color: number = 0;
</script>

<section class="case-{color}">
    <div class="coins">
        {values.coins.toString().padStart(2, "0")}
    </div>
    <div class="voltorbs">
        <img src="voltorb.png" alt="voltorb" />
        {values.voltorbs}
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
        z-index: 3;
    }

    img {
        height: 100%;
        width: auto;
    }

    .coins,
    .voltorbs {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .coins {
        justify-content: flex-end;
        border-bottom: 3px solid white;
    }

    .voltorbs {
        height: 100%;
        place-content: space-around;
    }

    .case-0 {
        background-color: hsl(13, 70%, 60%);
    }

    .case-1 {
        background-color: hsl(120, 45%, 45%);
    }

    .case-2 {
        background-color: hsl(35, 79%, 56%);
    }

    .case-3 {
        background-color: hsl(211, 93%, 58%);
    }

    .case-4 {
        background-color: hsl(285, 67%, 63%);
    }
</style>
