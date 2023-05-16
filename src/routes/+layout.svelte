<script lang="ts">
	import { fly } from 'svelte/transition';
	import '../app.css';
	import Footer from '../components/+footer.svelte';
	import Head from '../components/+head.svelte';
	import Logo from '../components/+logo.svelte';
	import type { PageData } from './$houdini';
	export let data: PageData;
</script>

<Head />
<Logo />
<main
	class="h-full max-h-full min-h-[100svh] w-screen
    bg-gray dark:bg-eerie-black p-4 pt-24 md:pt-4 flex
    flex-col md:grid md:grid-cols-16 gap-x-4 items-stretch
    justify-stretch"
>
	{#key data.url}
		<section
			in:fly={{ x: -400, duration: 350, delay: 350 }}
			out:fly={{ y: -400, duration: 350 }}
			class="flex flex-col md:col-span-8
    xl:col-span-8 grow"
		>
			<slot />
		</section>
	{/key}
	<Footer />
</main>
