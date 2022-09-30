<script>
	import Count from './Count.svelte';

	const islandProps = {
		'on:idle': true,
		autoinit: 'svelte-ssr',
		import: '/islands/islands.js'
	};

	// TODO: FOUC since server-render has different style classes
	// only in dev
</script>

<p>Is-land</p>

<is-land {...islandProps}>
	<Count />
</is-land>

<p>Static one</p>
<Count />
