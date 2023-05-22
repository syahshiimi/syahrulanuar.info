<script lang="ts">
	import type { GetHome$result } from '$houdini';
	import { Image } from '@datocms/svelte';

	export let image: GetHome$result['allArtworkdetails'][0];
</script>

<div class="relative">
	<Image
		class="peer max-w-[400px] h-auto aspect-video object-cover
                    saturate-0 hover:saturate-100
                    transition-all ease-in-out duration-250"
		layout="responsive"
		pictureClass="object-cover object-center"
		data={image.artworkCoverImage?.responsiveImage ?? {}}
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
