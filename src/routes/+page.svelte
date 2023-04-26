<script lang="ts">
	import { fade } from 'svelte/transition';
	import Loader from '../components/+loader.svelte';
	let visible = true;
	let contentVisible = false;
	function hideLoader() {
		visible = false;
		setTimeout(() => {
			contentVisible = true;
		}, 1000);
	}
</script>

<section class="grid grid-cols-12 grow w-full">
	<Loader on:click={hideLoader} {visible} />
	{#if contentVisible === true}
		<div
			in:fade
			class="flex flex-col gap-y-[32px]
        col-span-full lg:col-span-8"
		>
			<p class="text-eerie-black dark:text-gray font-basis font-bold text-h3-m xl:text-h3">
				<span class="text-asparagus">Syahrul Anuar (b. 1995, Singapore)</span> is an artist and cultural
				worker whose practice moves tangential to the interests of merantau (migration), owing to his
				family’s diaspora within the Nusantara (Malay World). Intrigued by the narratives and histories
				of the Malay World and how humans have meandered it, he surveys and unravels its complex multiplicities
				through a research-based practice that would often weave fact and fiction, past and present,
				the real and the digital.
			</p>
			<p class="text-eerie-black dark:text-gray font-basis font-bold text-h3-m xl:text-h3">
				His practice has been continually expanding beyond the traditional photographic medium,
				utilising Artificial Intelligence, Machine Learning, Computer Graphics and recently Smart
				Contracts. They act as both methods and frameworks into reframing and reconfiguring
				photography in a complex and dynamic landscape.
			</p>
			<p class="text-gray font-basis font-bold text-h3-m xl:text-h3">
				Syahrul is a graduate of the Nanyang Technological University, School of Art, Design Media
				with a BFA in Media Art (Photography). For his excellence, he received the Kwek Leng Joo
				Prize of Excellence in 2021. He has exhibited his works across Singapore, China and the
				Netherlands. He freelances as a full-stack developer and educator.
			</p>
		</div>
	{/if}
</section>
