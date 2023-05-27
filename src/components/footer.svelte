<script lang="ts">
	let links = [
		{ href: 'https://www.instagram.com/syahshiimi/', name: 'Instagram' },
		{ href: 'https://www.are.na/syahrul-anuar', name: 'Arena' },
		{ href: '/about', name: 'Info' }
	];
</script>

<footer
	class="fixed left-0 bottom-0 py-2 w-full bg-gray
dark:bg-eerie-black"
>
	{#each links as link}
		<a
			href={link.href}
			class={`pt-12 md:pt-0 col-span-full cols-span-1 text-link
            mx-4 dark:text-gray font-basis font-bold
            hover:text-asparagus transition-all ease-in-out`}
		>
			{link.name}
		</a>
	{/each}
</footer>
