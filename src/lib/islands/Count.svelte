<script>
	export let title = 'hello';
	let count = 0;

	// we can't use $app/environment here since this is being bundled outside of SvelteKit
	let isBrowser = typeof window !== 'undefined';
</script>

<button
	on:click={() => count++}
	style:cursor={isBrowser ? 'pointer' : 'not-allowed'}
	disabled={!isBrowser}>{title} {count}</button
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
