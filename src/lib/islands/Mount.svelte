<script>
	import { onMount } from 'svelte';

	let hydrateTime = '';
	let secondsAgo = 0;
	let start = 0;

	function getFormattedTimestamp() {
		return new Intl.DateTimeFormat('en-US', {
			dateStyle: 'medium',
			timeStyle: 'medium'
		}).format(new Date());
	}

	onMount(() => {
		hydrateTime = getFormattedTimestamp();
		start = Date.now();

		let interval = setInterval(() => {
			secondsAgo = Math.floor((Date.now() - start) / 1000);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

{#if hydrateTime}
	<p>
		Hydrated on {hydrateTime} ({secondsAgo} seconds ago)
	</p>
{:else}
	<p>Not hydrated</p>
{/if}
