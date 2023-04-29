<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Loader from '../components/+loader.svelte';
	import type { PageData } from './$houdini';
	import { Image } from '@datocms/svelte';
	let visible = true;
	let contentVisible = false;
	function hideLoader() {
		visible = false;
		setTimeout(() => {
			contentVisible = true;
		}, 1000);
	}

	export let data: PageData;

	$: ({ GetHome } = data);
</script>

<Loader on:click={hideLoader} {visible} />
<section class="flex flex-col grow z-10">
	{#if contentVisible === true}
		{#if $GetHome.data}
			<div
				transition:fly={{ duration: 500, x: '-100vw' }}
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
							data={image.artworkCoverImage?.responsiveImage}
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
