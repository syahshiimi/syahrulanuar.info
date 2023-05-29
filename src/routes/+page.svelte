<script lang="ts">
	import { fly } from 'svelte/transition';
	import Loader from '../components/loader.svelte';
	import type { PageData } from './$houdini';
	import { pageLoaded } from '../../stores';
	import Featureslider from '../components/dato/featureslider.svelte';
	import Accordion from '../components/accordion.svelte';

	// loader
	let hasLoaded: boolean;
	pageLoaded.subscribe((value) => {
		hasLoaded = value;
	});

	// Houdini
	export let data: PageData;

	$: ({ GetHome } = data);
</script>

{#if hasLoaded === false}
	<Loader />
{/if}

{#if hasLoaded === true}
	{#if $GetHome.data}
		<div
			in:fly={{ x: -400, duration: 350, delay: 1000 }}
			class="invisible hidden md:flex md:visible flex-col md:flex-row gap-y-2 md:gap-x-5 md:w-8/12"
		>
			<Featureslider info={$GetHome.data ?? {}} />
		</div>
		<section class="h-full visible block">
			<ul>
				{#each $GetHome.data?.allArtworkdetails as item, index}
					<Accordion info={item} {index} />
				{/each}
			</ul>
		</section>
	{/if}
{/if}
