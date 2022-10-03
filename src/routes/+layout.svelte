<script>
	import '../app.css';
	import 'prismjs/themes/prism-tomorrow.css';
	import { dev } from '$app/environment';

	// we can't import directly because when CSR is disabled it won't run on the client
	const devImport = `<script type="module" src="/node_modules/@11ty/is-land/is-land.js"></sc${'ript>'}`;
	// use the bundled version when not dev
	const builtImport = `<script type="module" src="/__islands/is-land.js"></sc${'ript>'}`;
	const islandPath = dev ? devImport : builtImport;
</script>

<svelte:head>
	<meta property="og:site_name" content="SvelteKit + is-land" />
	<meta property="og:title" content="SvelteKit + is-land" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sveltekit-is-land.vercel.app/" />
	<meta
		property="og:description"
		content="A partially-hydrated SvelteKit site using @11ty/is-land"
	/>
	<meta name="twitter:image" content="https://sveltekit-is-land.vercel.app/social.png" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="@geoffrich_" />
	<meta property="og:image" content="https://sveltekit-is-land.vercel.app/social.png" />
	<meta name="twitter:image:alt" content="Page image for SvelteKit + is-land" />
	<meta property="og:image:alt" content="Page image for SvelteKit + is-land" />
</svelte:head>

<nav data-sveltekit-prefetch>
	<a href="/">Home</a>
	<a href="/full">Fully Hydrated</a>
	<a href="/readme">README</a>
</nav>

<slot />

{@html islandPath}

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		background: var(--highlight);
		padding: 0.5rem;
	}

	a {
		color: white;
	}
</style>
