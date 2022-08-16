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
		<div class="socials">
			<a href="https://twitter.com/_lkyuu" target="_blank">
				<button title="Twitter">🐦</button>
			</a>
			<a href="https://github.com/lordkyuusei" target="_blank">
				<button title="Github">🐛</button>
			</a>
		</div>
		<div class="voltorb-flip">
			<span>
				Level {$level}
				<button on:click={toggleMusic}>
					{playMusic ? "🎵" : "🔇"}
				</button>
			</span>
		</div>
		<div class="empty">@_lkyuu - 2022</div>
	</header>
	<slot />
</main>

<footer />

<style>
	.socials,
	.empty,
	.voltorb-flip {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 1em;
		text-align: center;
	}

	.socials {
	}

	.voltorb-flip {
		flex-direction: column;
		place-content: center;
	}

	.voltorb-flip > h2 {
		margin: 0.2em;
	}

	.voltorb-flip > span {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1em;
	}

	header {
		display: grid;
		grid-template-columns: 0.5fr 1fr 0.5fr;
		place-content: center;
		place-items: center;
		height: 5em;
		width: 100%;
		background-color: var(--dark-green);
	}

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

	a {
		text-decoration: none;
	}

	button {
		cursor: pointer;
		font-size: 1.5em;
		height: 2em;
		width: 2em;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid black;
		transition: all 0.2 ease-in-out;
	}

	button:hover {
		transform: scale(1.1);
		transition: all 0.2 ease-in-out;
	}
</style>
