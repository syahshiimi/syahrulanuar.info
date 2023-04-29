<script lang="ts">
	import { fade } from 'svelte/transition';
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

<!-- <Loader on:click={hideLoader} {visible} /> -->
<section class="flex flex-col col-span-8">
	<!-- {#if contentVisible === true} -->
	{#if $GetHome.data}
		<div in:fade class="flex flex-row gap-x-[32px]">
			{#each $GetHome.data?.allArtworkdetails as image}
				<Image
					class="min-h-full aspect-video object-cover
                    saturate-0 hover:saturate-100
                    transition-all ease-in-out duration-250"
					layout="responsive"
					pictureClass="object-cover object-center"
					data={image.artworkCoverImage?.responsiveImage}
				/>
			{/each}
		</div>
	{/if}
	<!-- {/if} -->
</section>
