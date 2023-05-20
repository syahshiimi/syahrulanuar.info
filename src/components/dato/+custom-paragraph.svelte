<script lang="ts">
	import type { Paragraph, Span } from 'datocms-structured-text-utils';
	import { onMount } from 'svelte';
	export let node: Paragraph;
	$: ({ type, children } = node);

	onMount(() => {
		console.log(
			'para',
			children.filter((element) => (element.type === 'link' ? console.log(element, element.children[0].value) : null))
		);
	});
</script>

{#if type}
	{#if type === 'paragraph'}
		<p class="text-h3 font-semibold inline-block [&>strong]:text-asparagus [&>a]:italic" >
			<slot />
		</p>
	{/if}
{/if}
