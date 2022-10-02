<script>
	import { onMount } from 'svelte';
	export let title = 'hello';
	let count = 0;
	let hydrated = false;

	onMount(() => {
		hydrated = true;
	});
</script>

<button on:click={() => count++} disabled={!hydrated}>{title} {count}</button>

<style>
	button {
		padding: 0.7rem 1rem;
		font-size: 1rem;
		background-color: var(--primary);
		color: white;
		font-weight: 700;
		border: none;
		border-radius: 0.25rem;
		cursor: pointer;
	}

	button:disabled {
		filter: grayscale(1);
		cursor: not-allowed;
	}
</style>
