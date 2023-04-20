<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
	export let visible = false;
	let expand = false;

	function handleLoad() {
		expand = true;

		setTimeout(() => {
			dispatch('click');
		}, 750);
	}
</script>

{#if visible == true}
	<div
		in:fade={{ duration: 500 }}
		out:fade={{ duration: 500 }}
		class={`grow flex flex-col w-full place-self-center
        col-span-full items-center justify-center gap-y-2 xl:gap-y-4`}
	>
		<h1
			class={`font-tiny ${
				expand === false
					? 'font-[200] hover:font-[80] tracking-[-0.2em] xl:tracking-[-0.2em]'
					: 'tracking-normal font-[80]'
			} hover:tracking-normal w-fit transition-all duration-500 ease-in-out text-center text-7xl md:text-8xl lg:text-heading text-asparagus text-red-purple`}
		>
			Syahrul Anuar
		</h1>
		<h2
			class="font-basis text-h3-m font-bold text-xl md:text-2xl lg:text-3xl tracking-tight dark:text-gray"
		>
			New Site Under Construction.
		</h2>
		<button
			on:click={handleLoad}
			class="text-detail font-bold text-eerie-black dark:text-gray
        hover:text-asparagus transition-all duration-300
        ease-in-out font-basis"
		>
			See Info
		</button>
	</div>
{/if}
