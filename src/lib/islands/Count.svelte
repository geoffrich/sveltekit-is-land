<script>
	import { onMount } from 'svelte';
	export let title = 'hello';
	let count = 0;
	let hydrated = false;

	onMount(() => {
		hydrated = true;
	});
</script>

<button
	on:click={() => count++}
	style:cursor={hydrated ? 'pointer' : 'not-allowed'}
	disabled={!hydrated}>{title} {count}</button
>

<style>
	button {
		padding: 0.7rem 1rem;
		font-size: 1rem;
		background-color: var(--primary);
		color: white;
		font-weight: 700;
		border: none;
		border-radius: 0.25rem;
	}

	button:disabled {
		filter: grayscale(1);
	}
</style>
