<script lang="ts">
	import '../app.css';
	import Footer from '../components/+footer.svelte';
</script>

<main
	class="min-h-screen w-screen flex flex-col items-center
    justify-between gap-8 bg-gray dark:bg-eerie-black p-4"
>
	<slot />
	<Footer />
</main>
