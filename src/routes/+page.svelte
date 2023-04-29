<script lang="ts">
	import { fade } from 'svelte/transition';
	import Loader from '../components/+loader.svelte';
	import { StructuredText } from '@datocms/svelte';
	import { isBlock, isInlineItem, isItemLink } from 'datocms-structured-text-utils';
	import type { PageData } from './$houdini';
	let visible = true;
	let contentVisible = false;
	function hideLoader() {
		visible = false;
		setTimeout(() => {
			contentVisible = true;
		}, 1000);
	}

	export let data: PageData;

	$: ({ HomeAbout } = data);
</script>

<Loader on:click={hideLoader} {visible} />
<section class="grid grid-cols-12 grow w-full">
	{#if contentVisible === true}
		<div
			in:fade
			class="flex flex-col gap-y-[32px]
        col-span-full lg:col-span-8"
		>
			<div
				class="text-eerie-black dark:text-gray
            font-basis font-bold text-h3-m xl:text-h3
            whitespace-break-spaces flex flex-col gap-10"
			/>
		</div>
	{/if}
</section>
