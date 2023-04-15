<script>
	let links = [
		{ href: 'https://www.instagram.com/syahshiimi/', name: 'Instagram' },
		{ href: 'https://www.are.na/syahrul-anuar', name: 'Arena' }
	];
</script>

<footer class="w-full grid grid-cols-12">
	{#each links as link}
		<a
			href={link.href}
			class={`cols-span-1 col-start-auto text-link lg:mx-4 dark:text-gray font-basis
        font-bold`}
		>
			{link.name}
		</a>
	{/each}
</footer>
