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
		<div class="col-span-full row-end-3 self-end">
			<ul>
				{#each $GetHome.data?.allArtworkdetails as element, index}
					<li
						in:fly={{ x: -400, duration: 350, delay: 900 + 250 * index }}
						class="py-4
                    text-info font-basis hover:pb-24 transition-all
                    duration-250 ease-in flex flex-row justify-between"
					>
						<span
							class="font-bold font-basis
                        text-info text-eerie-black"
						>
							{element.artworkTitle}
						</span>
						<span
							class="font-bold font-basis
                        text-eerie-black">{element.artworkYear}</span
						>
					</li>
					<hr
						in:fly={{ x: -400, duration: 1000 + 250 * index, delay: 1200 + 250 * index }}
						class="border-t-2 border-eerie-black
                        transition-all ease-in"
					/>
				{/each}
			</ul>
		</div>
	{/if}
{/if}
