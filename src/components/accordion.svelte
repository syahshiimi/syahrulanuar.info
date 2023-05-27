<script lang="ts">
	import type { GetHome$result } from '$houdini';
	import { StructuredText } from '@datocms/svelte';
	import { isParagraph } from 'datocms-structured-text-utils';
	import { fly, fade } from 'svelte/transition';
	import CustomParagraph from './dato/custom-paragraph.svelte';

	let isHovering: boolean = false;

	export let info: GetHome$result['allArtworkdetails'][0];
	export let index: number;
</script>

<li
	in:fly={{ x: -400, duration: 350, delay: 900 + 250 * index }}
	class="text-info font-basis mb-1 mt-4 sm:mt-6
    transition-all duration-250 ease-in flex flex-col
    justify-between overflow-hidden"
>
	<div class="flex justify-between">
		<span
			on:click={() => {
				isHovering = !isHovering;
			}}
			on:keydown={() => {
				isHovering = !isHovering;
			}}
			class="peer font-bold max-w-[15ch]
             sm:max-w-fit font-basis text-info-m
            md:text-info
        text-eerie-black cursor-pointer
        hover:text-asparagus dark:text-gray
        aria-pressed:text-asparagus"
		>
			{info.artworkTitle}
		</span>
		<span
			class="font-bold font-basis text-info-m md:text-info
        text-eerie-black peer-hover:italic pr-2
        dark:text-gray"
		>
			{info.artworkYear}
		</span>
	</div>
	<div
		in:fade
		class={`flex flex-col  text-body-m max-w-2xl
            transition-all duration-[750ms] ease-in-out
            delay-75 dark:text-gray font-basis font-medium
        gap-y-4 ${isHovering === true ? 'max-h-[1000px] py-4' : 'max-h-0 pt-2 pb-0'}`}
	>
		<StructuredText data={info.artworkShortWriteup?.value} />
	</div>
</li>
<hr
	in:fly={{ x: -400, duration: 1000 + 250 * index, delay: 1200 + 250 * index }}
	class="border-t-2 border-eerie-black
    dark:border-gray/50 transition-all
    ease-in"
/>
