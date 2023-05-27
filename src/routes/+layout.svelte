<script lang="ts">
	import '../app.css';
	import Footer from '../components/footer.svelte';
	import Head from '../components/head.svelte';
	import Logo from '../components/logo.svelte';
	import type { PageData } from './$houdini';
	export let data: PageData;
</script>

<Head />
<Logo />
<main
	class="h-full max-h-fit min-h-[100svh] w-screen
    bg-gray dark:bg-eerie-black p-4 pt-24 md:pt-4 flex
    flex-col md:grid md:grid-cols-16 gap-x-4 items-stretch
    justify-stretch pb-20 lg:pb-16"
>
	{#key data.url}
		<slot />
	{/key}
	<Footer />
</main>
