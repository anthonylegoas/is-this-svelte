<script>
    import { nbSvelteSnowflakes } from '../../store'
</script>

<p>Configure the animation when Svelte is detected.</p>
<label> Icons number ({$nbSvelteSnowflakes}):
    <input name="taille" type="range" min="1" max="50" step="1" bind:value={$nbSvelteSnowflakes} />
</label>

<style>
    p, label {
        color: var(--color-second);
        margin-bottom: 0.75rem;
    }

    input[type=range] {
        width: 175px;
    }
</style>