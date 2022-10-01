<script>
	import '../app.css';
</script>

<nav>
	<a href="/">Home - SSR only</a>
	<a href="/full">Fully Hydrated</a>
</nav>

<slot />

<style>
	nav {
		display: flex;
		gap: 1rem;
	}
</style>
