<script>
	import { onMount } from 'svelte';

	let state = 'not loaded';
	onMount(() => {
		state = 'loading';
		setTimeout(() => {
			state = 'loaded';
		}, 2000);
	});
</script>

<p>I'm {state}</p>
