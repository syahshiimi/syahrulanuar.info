<script lang="ts">
	import { fly } from 'svelte/transition';
	import Loader from '../components/+loader.svelte';
	import type { PageData } from './$houdini';
	Image;
	import { pageLoaded } from '../../stores';
	import { Image } from '@datocms/svelte';
	import { onMount } from 'svelte';

	let loader: boolean;

	pageLoaded.subscribe((value) => {
		loader = value;
	});

	// Houdini
	export let data: PageData;

	$: ({ GetHome } = data);
</script>

{#if loader === false}
	<Loader />
{/if}

<section class="flex flex-col grow z-10">
	{#if loader === true}
		{#if $GetHome.data}
			<div
				in:fly={{ x: -400, duration: 350, delay: 1000 }}
				class="flex flex-col md:flex-row gap-y-2
            md:gap-x-5"
			>
				{#each $GetHome.data?.allArtworkdetails as image}
					<div class="relative aspect-video object-fill">
						<Image
							class="peer min-h-full aspect-video object-cover
                    saturate-0 hover:saturate-100
                    transition-all ease-in-out duration-250"
							layout="responsive"
							pictureClass="object-cover object-center"
							data={image?.artworkCoverImage?.responsiveImage ?? {}}
						/>
						<p
							class="absolute z-20 text-detail
                        font-bold text-mauve-taupe
                    font-basis top-2 left-4 max-w-[30ch]
                    opacity-0 peer-hover:opacity-100
                    transition-all duration-250 ease-in-out"
						>
							{image.artworkTitle}
						</p>
					</div>
				{/each}
			</div>
		{/if}
	{/if}
</section>
