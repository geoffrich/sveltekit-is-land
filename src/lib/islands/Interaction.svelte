<script>
	import { onMount } from 'svelte';
	import Count from './Count.svelte';

	let hydrated = false;

	onMount(() => {
		hydrated = true;
	});
</script>

{#if hydrated}
	<p>I've been hydrated! 😋</p>
{:else}
	<p>So thirsty 😰</p>
{/if}
<Count />
