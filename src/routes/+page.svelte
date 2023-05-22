<script lang="ts">
	import { fly } from 'svelte/transition';
	import Loader from '../components/loader.svelte';
	import type { PageData } from './$houdini';
	import { pageLoaded } from '../../stores';
	import Featureslider from '../components/dato/featureslider.svelte';

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
			class="col-start-1 col-span-10 flex flex-col md:flex-row gap-y-2
            md:gap-x-5"
		>
			{#each $GetHome.data?.allArtworkdetails as image}
				<Featureslider image={image ?? {}} />
			{/each}
		</div>
	{/if}
{/if}
