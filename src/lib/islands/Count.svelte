<script>
    export let title = 'hello';
    let count = 0;
</script>

<button on:click={() => count++}>{title} {count}</button>

<style>
    button {
        border: 2px solid red;
    }
</style>