<script lang="ts">
	let random = () => {
		return Math.floor(Math.random() * (500 - 120) + 0);
	};
	export let num = random();
</script>

<nav
	class="z-50 w-full md:w-fit md:right-0 bg-transparent fixed md:-top-12 flex flex-row
justify-center md:items-end md:justify-end md:pr-8"
>
	<h1
		style={`font-weight: ${num}`}
		class={`font-tiny -tracking-[0.2em] hover:font-[80] leading-none
    hover:-tracking-[0.02em] text-[60px] md:text-heading transition-all duration-500 ease-in-out
 text-center text-asparagus dark:text-mauve-taupe h-fit
 max-h-fit whitespace-nowrap selection:text-red-purple selection:dark:text-asparagus
 selection:dark:bg-transparent pb-4`}
	>
		<a href="/" class="h-0"> Syahrul Anuar </a>
	</h1>
</nav>
