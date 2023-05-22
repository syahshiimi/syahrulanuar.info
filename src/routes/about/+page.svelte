<script lang="ts">
	import { StructuredText } from '@datocms/svelte';
	import type { PageData } from './$houdini';

	import { isBlock, isLink, isParagraph, isSpan } from 'datocms-structured-text-utils';

	import { fly } from 'svelte/transition';
	import CustomParagraph from '../../components/dato/custom-paragraph.svelte';

	export let data: PageData;
	$: ({ AboutPage } = data);
</script>

<section
	in:fly={{ x: -400, duration: 350, delay: 1 }}
	out:fly={{ y: -400, duration: 350 }}
	class="flex flex-col items-center justify-start
gap-8 col-span-10"
>
	{#if $AboutPage.data}
		<div
			class="grow text-eerie-black dark:text-gray font-basis font-medium text-body xl:text-body flex flex-col gap-10 selection:bg-mauve-taupe selection:text-asparagus"
		>
			<StructuredText
				data={$AboutPage.data?.about?.artistBiography?.value}
				components={[[isParagraph, CustomParagraph]]}
			/>
		</div>
	{/if}
</section>
