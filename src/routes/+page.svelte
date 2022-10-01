<script>
	import { v4 as uuid } from '@lukeed/uuid';
	import Count from './Count.svelte';
	import { dev } from '$app/environment';

	const importPath = dev ? '/src/routes/Count.svelte' : '/islands/Count.js';
	const islandProps = {
		'on:idle': true,
		autoinit: 'svelte-ssr',
		import: importPath
	};

	const id = uuid();

	const props = {
		title: 'is-land'
	};
</script>

<h2>is-land</h2>

<is-land {...islandProps}>
	<Count />
</is-land>

<h2>is-land with props</h2>

<is-land {...{ 'on:idle': true }}>
	<div id="island-{id}">
		<Count {...props} />
	</div>

	<template data-island>
		{@html `
	<script type="module">
		import App from '${importPath}';
		new App({
			target: document.getElementById('island-${id}'),
			props: {
				title: 'is-land'
			},
			hydrate: true
		});
	</script>
	`}
	</template>
</is-land>

<p>Static one</p>
<Count />
