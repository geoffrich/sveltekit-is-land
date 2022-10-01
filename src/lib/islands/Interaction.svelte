<script>
	import { onMount } from 'svelte';
	import Count from './Count.svelte';

	let hydrated = false;

	onMount(() => {
		hydrated = true;
	});
</script>

<div>
	{#if hydrated}
		<p>I've been hydrated! 😋</p>
	{:else}
		<p>So thirsty 😰</p>
	{/if}
	<Count />
</div>

<style>
	div {
		border: 2px dashed var(--primary);
		padding: 1rem;
	}
</style>
