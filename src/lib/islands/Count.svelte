<script>
	export let title = 'hello';
	let count = 0;
</script>

<button on:click={() => count++}>{title} {count}</button>

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
</style>
