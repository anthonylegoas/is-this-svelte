<script>
    export let href;
</script>

<a {href} target="_blank">
    <slot/>
</a>

<style>
    a {
        font-size: 0.75rem;
        color: var(--color-flash)
    }
</style>