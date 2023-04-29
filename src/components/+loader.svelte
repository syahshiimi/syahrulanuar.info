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
		class={`fixed top-[50%] left-[50%] h-[100svh]
        w-[100svw]
        -translate-y-[50%] -translate-x-[50%] grow flex
        flex-col bg-gray dark:bg-eerie-black place-self-center
        col-span-full items-center justify-center gap-y-2
        xl:gap-y-8`}
	>
		<h1
			class={`font-tiny ${
				expand === false
					? 'font-[200] hover:font-[80] tracking-[-0.2em] xl:tracking-[-0.2em]'
					: 'tracking-normal font-[80]'
			} hover:tracking-normal w-fit transition-all
            duration-500 ease-in-out text-center text-7xl
            md:text-8xl lg:text-heading dark:text-asparagus text-red-purple`}
		>
			Syahrul Anuar
		</h1>
		<button
			on:click={handleLoad}
			class="text-detail font-bold text-eerie-black dark:text-gray
        hover:text-asparagus transition-all duration-300
        ease-in-out font-basis"
		>
			Enter
		</button>
	</div>
{/if}
