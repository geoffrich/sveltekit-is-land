<script>
	import Count from '$lib/islands/Count.svelte';
	import Mount from '$lib/islands/Mount.svelte';
	import Click from '$lib/islands/Click.svelte';
	import Island from '$lib/Island.svelte';
</script>

<h1>SvelteKit + {'<is-land>'}</h1>

<p>
	Experimenting with partial hydration in SvelteKit using <a href="https://github.com/11ty/is-land"
		>@11ty/is-land</a
	>
</p>

<p>This page does not use SvelteKit's client-side rendering. Check out the network tab!</p>

<p><a href="https://github.com/geoffrich/sveltekit-is-land">Demo repo</a></p>

<h2>Static one -- SSRd by SK, no hydration</h2>
<Count title="Static" />

<h2>Hydrated with is-land</h2>

<Island component={Count} name="Count" />

<h2>With props</h2>

<Island component={Count} name="Count" props={{ title: 'island' }} />

<h2>With hydration on click</h2>

<Island component={Click} name="Click" islandProps={{ 'on:interaction': true }} />

<h2>Scroll down...</h2>

<hr style:height="100vh" />

<h2>Without hydration</h2>
<Mount />

<h2>With hydration on visible</h2>

<Island component={Mount} name="Mount" islandProps={{ 'on:visible': true }} />

<h2>With hydration on hover</h2>

<Island component={Mount} name="Mount" islandProps={{ 'on:interaction': 'mouseenter,focusin' }} />
