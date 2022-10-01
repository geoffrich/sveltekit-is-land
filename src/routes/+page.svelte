<script>
	import Count from '$lib/islands/Count.svelte';
	import Mount from '$lib/islands/Mount.svelte';
	import Click from '$lib/islands/Click.svelte';
	import Island from '$lib/Island.svelte';
</script>

<h2>Static one</h2>
<Count title="Static" />

<h2>is-land</h2>

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
