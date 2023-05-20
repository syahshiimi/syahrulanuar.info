<script lang="ts">
	import { isItemLink } from "datocms-structured-text-utils";
    import type { ItemLink } from "datocms-structured-text-utils";
	import { onMount } from "svelte/types/runtime/internal/lifecycle";
    
    export let node: ItemLink;
    export let link:  any
    
    $: ({meta} = node)
    
    onMount(() => {
        console.log(node)
    })

</script>

<a href="example.com"><slot/></a>

