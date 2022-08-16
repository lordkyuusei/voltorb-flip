<script lang="ts">
</script>

<section>
    <details>
        <summary>Règles & Contrôles</summary>
        <div class="details">
            <p>
                Chaque tuile de ce plateau de 5x5 cache un voltorbe, un 1, un 2
                ou un 3. En vous aidant des tuiles-indices et des chiffres
                indiqués (nombre de points / nombre de voltorbe), vous devez
                trouver tous les 2 et les 3. Chaque valeur trouvée est
                multipliée à votre total de points actuel (ainsi, les 1 comptent
                pour du beurre). Attention aux voltorbes : ils font échouer la
                manche en cours et vous perdrez un niveau !
            </p>
            <ul>
                <li>🖱️⬅️ (appui court sur mobile) - Flip</li>
                <li>🖱️➡️ (appui long sur mobile) - Marquage</li>
            </ul>
        </div>
    </details>
</section>

<style>
    section {
        display: flex;
        width: 100%;
        font-size: 0.8em;
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
