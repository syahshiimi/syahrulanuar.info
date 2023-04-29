<script lang="ts">
	import '../app.css';
	import Footer from '../components/+footer.svelte';
	import Head from '../components/+head.svelte';
	import Logo from '../components/+logo.svelte';
</script>

<Head />

<Logo />
<main
	class="h-full max-h-full min-h-[100svh] w-screen
    bg-gray dark:bg-eerie-black p-4 grid grid-cols-16 gap-x-4"
>
	<slot />
	<Footer />
</main>
