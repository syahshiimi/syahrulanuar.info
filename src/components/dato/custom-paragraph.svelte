<script lang="ts">
	import type { Node } from 'datocms-structured-text-utils';
	import { isParagraph, isSpan } from 'datocms-structured-text-utils';
	import { onMount } from 'svelte';
	export let node: Node;

	import { pageLoaded } from '../../../stores';

	onMount(() => {
		pageLoaded.set(true);
	});
</script>

{#if isParagraph(node)}
	<p class="text-h3-m sm:text-h3-t lg:text-h3 font-semibold whitespace-normal">
		{#each node.children as child}
			{#if child.type === 'span'}
				{#if child?.marks?.[0] === 'strong'}
					<strong class="text-asparagus">
						{child?.value}
					</strong>
				{/if}
				{#if child?.marks?.[0] === 'emphasis'}
					<i class="whitespace-pre-wrap">
						{child?.value}
					</i>
				{/if}
				{#if child?.marks == undefined || null}
					{child.value.trim()}
				{/if}
			{/if}
			{#if child.type === 'link'}
				<a href={child.url} class="hover:text-mauve-taupe transition-colors duration-250 ease-out">
					{child.children[0].value}
				</a>
			{/if}
		{/each}
	</p>
{/if}
