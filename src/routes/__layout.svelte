<script lang="ts">
	import "../app.css";
	import { onMount } from "svelte";
	import { level } from "$lib/store/exports";
	import { browser } from "$app/env";

	let playMusic: boolean = false;
	let audio: HTMLAudioElement;

	const toggleMusic = () => {
		playMusic = !playMusic;
		if (playMusic) {
			audio.play();
		} else {
			audio.pause();
		}
	};

	onMount(() => {
		if (browser) {
			audio = new Audio("loop.mp3");
			audio.loop = true;
		}
	});
</script>

<main>
	<header>
		<span>
			Level {$level}
		</span>
		<button on:click={toggleMusic}>
			{playMusic ? "🎵" : "🔇"}
		</button>
	</header>
	<slot />
</main>

<footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		place-items: center;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: var(--light-green);
		height: 100%;
	}
</style>
