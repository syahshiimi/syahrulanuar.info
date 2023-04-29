<script lang="ts">
	import { StructuredText } from '@datocms/svelte';
	import type { PageData } from '../$houdini';

	export let data: PageData;
	$: ({ AboutPage } = data);
</script>

<section
	class="flex flex-col
items-center justify-start gap-8 bg-gray col-span-8"
>
	<div
		class="grow text-eerie-black dark:text-gray
            font-basis font-medium text-body xl:text-body flex flex-col gap-10"
	>
		<StructuredText data={$AboutPage.data?.about?.artistBiography} />
	</div>
</section>
