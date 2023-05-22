<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { pageLoaded } from '../../stores';

	let isExpand = false;

	function handleLoad() {
		// set title to  expand when entering
		isExpand = true;
		pageLoaded.set(true);
	}
</script>

<div
	in:fade={{ duration: 1500, delay: 0 }}
	out:fade={{ duration: 500, delay: 350 }}
	class={`fixed top-[50%] left-[50%] h-[100svh]
        w-[100svw]
        -translate-y-[50%] -translate-x-[50%] grow flex
        flex-col bg-gray dark:bg-eerie-black place-self-center
        col-span-full items-center justify-center gap-y-2
        xl:gap-y-8 z-50`}
>
	<h1
		class={`font-tiny ${
			isExpand === false
				? 'font-[200] hover:font-[80] tracking-[-0.2em] xl:tracking-[-0.2em]'
				: 'tracking-normal font-[80]'
		} hover:tracking-normal w-fit transition-all
            duration-500 ease-in-out text-center text-7xl
            md:text-8xl lg:text-heading dark:text-asparagus
            text-red-purple selection:bg-none
            selection:text-asparagus selection:dark:text-red-purple`}
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
