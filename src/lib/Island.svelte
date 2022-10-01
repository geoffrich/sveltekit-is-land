<script>
	import { v4 as uuid } from '@lukeed/uuid';
	import { devalue } from 'devalue';
	// TODO: if this is a package, I can't get these values
	// https://github.com/sveltejs/kit/issues/6449
	import { dev, browser } from '$app/environment';

	/**
	 * The component you want to initialize
	 * @type {new (args: { target: any; props?: any; }) => import('svelte').SvelteComponentTyped}
	 */
	export let component;

	/**
	 * The name of the component. This will be used to build the island import.
	 * TODO: is there a way to programatically determine this?
	 * @type {string}
	 */
	export let name;

	/**
	 * The props to set on the component. They need to be serializable with devalue.
	 */
	export let props = {};

	/**
	 * The props to set on the is-land element, e.g. { 'on:visible': true }
	 */
	export let islandProps = {};

	const id = `island-${uuid()}`;
	const importPath = dev ? `/src/lib/islands/${name}.svelte` : `/islands/${name}.js`;

	// once we start client-side rendering, we don't want to initialize the island and import unnecessary code
	const renderIsland = !browser;
</script>

<is-land {...islandProps} {id}>
	<svelte:component this={component} {...props} />
	{#if renderIsland}
		<template data-island>
			{@html `
	<script type="module">
		import App from '${importPath}';
		new App({
			target: document.getElementById('${id}'),
			props: ${devalue(props)},
			hydrate: true
		});
	</script>
	`}
		</template>
	{/if}
</is-land>
