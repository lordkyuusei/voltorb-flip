<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Board from "$lib/components/Board.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Board />
</section>

<style>
	section {
		height: 100%;
		width: 100%;

		display: flex;
		place-content: center;
		place-items: center;
	}
</style>
