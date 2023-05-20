<script lang="ts">
	import { StructuredText } from '@datocms/svelte';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$houdini';

	export let data: PageData;
	$: ({ AboutPage } = data);
</script>

<section
	class="flex flex-col
items-center justify-start gap-8 col-span-8"
>
	{#if $AboutPage.data}
		<div
			class="grow text-eerie-black dark:text-gray
            font-basis font-medium text-body xl:text-body
            flex flex-col gap-10 selection:bg-mauve-taupe selection:text-asparagus"
		>
			<StructuredText data={$AboutPage.data?.about?.artistBiography ?? []} />
		</div>
	{/if}
</section>
