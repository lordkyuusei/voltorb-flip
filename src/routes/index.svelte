<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Board from "$lib/components/Board.svelte";
	import Controls from "$lib/components/Controls.svelte";
	import Leaderboard from "$lib/components/Leaderboard.svelte";
</script>

<svelte:head>
	<title>Voltorb Flip!</title>
</svelte:head>

<section>
	<Controls />
	<Board />
	<Leaderboard />
</section>

<style>
	section {
		height: 100%;
		width: 100%;

		display: grid;
		grid-template-columns: repeat(3, 1fr);
		place-content: center;
		place-items: flex-start;
		gap: 1em;
	}

	@media screen and (max-width: 768px) {
		section {
			grid-template-columns: 1fr;
			place-items: center;
			place-content: flex-start;
		}
	}

	@media screen and (min-width: 1444px) {
		section {
			grid-template-columns: 0.5fr 1fr 0.5fr;
		}
	}
</style>
