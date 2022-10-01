<script>
	import '../app.css';
	import { dev } from '$app/environment';

	// we can't import directly because when CSR is disabled it won't run on the client
	const devImport = `<script type="module" src="/node_modules/@11ty/is-land/is-land.js"></sc${'ript>'}`;
	// use the bundled version when not dev
	const builtImport = `<script type="module" src="/islands/is-land.js"></sc${'ript>'}`;
	const islandPath = dev ? devImport : builtImport;
</script>

<nav>
	<a href="/">Home - SSR only</a>
	<a href="/full">Fully Hydrated</a>
</nav>

<slot />

{@html islandPath}

<style>
	nav {
		display: flex;
		gap: 1rem;
	}
</style>
