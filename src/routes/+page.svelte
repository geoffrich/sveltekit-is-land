<script>
	import Count from '$lib/islands/Count.svelte';
	import Mount from '$lib/islands/Mount.svelte';
	import Interaction from '$lib/islands/Interaction.svelte';
	import Island from '$lib/Island.svelte';

	import { browser } from '$app/environment';
</script>

<h1>SvelteKit + {'<is-land>'}</h1>

<p>
	Experimenting with partial hydration in SvelteKit using <a href="https://github.com/11ty/is-land"
		>@11ty/is-land</a
	>
</p>

{#if browser}
	<p>
		Since you navigated here from a client-side rendered page, everything is now hydrated at once.
		Refresh the page to see the islands in action.
	</p>
{:else}
	<p>This page does not use SvelteKit's client-side rendering. Check out the network tab!</p>
{/if}

<p><a href="https://github.com/geoffrich/sveltekit-is-land">Demo repo</a></p>

<h2>Not an island</h2>
<Count title="Static" />

<h2>Hydrated with is-land</h2>

<Island component={Count} name="Count" />

<h2>With props</h2>

<Island component={Count} name="Count" props={{ title: 'island' }} />

<h2>With hydration on click</h2>

<Island component={Interaction} name="Interaction" islandProps={{ 'on:interaction': true }} />

<h2>With hydration on hover</h2>

<Island
	component={Interaction}
	name="Interaction"
	islandProps={{ 'on:interaction': 'mouseenter,focusin' }}
/>

<h2>With hydration on visible</h2>

<Island component={Mount} name="Mount" islandProps={{ 'on:visible': true }} />
