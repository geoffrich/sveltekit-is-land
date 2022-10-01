<script>
	import { onMount } from 'svelte';

	let state = 'not loaded';
	let dots = 0;
	onMount(() => {
		state = 'loading';
		const interval = setInterval(() => dots++, 300);
		const timeout = setTimeout(() => {
			state = 'loaded';
			clearInterval(interval);
		}, 4000);

		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	});
</script>

<p>
	I'm {state}{#each { length: dots } as _}.{/each}{#if state === 'loaded'}!{/if}
</p>
