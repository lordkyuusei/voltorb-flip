<script lang="ts">
</script>

<section>
    <details>
        <summary>Leaderboard</summary>
        <div class="details">
            <p>personne (le faux espoir lol)</p>
            <ul>
                <li>moi-même - dix mille milliards de points</li>
                <li>ma copine - pareil à 2 points près pas de chance</li>
            </ul>
        </div>
    </details>
</section>

<style>
    section {
        display: flex;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        section {
            width: calc(100% - 9em);
        }
    }

    details {
        width: 100%;
        height: 100%;
        margin: 0.5em;
    }

    summary {
        background: white;
        padding: 0.5em;
        border-radius: 3px;
    }

    details[open] > summary {
        border-radius: 0;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }

    .details {
        background: white;
        padding: 0.5em;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }
</style>
