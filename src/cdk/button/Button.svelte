<button on:click {...$$restProps}><slot/></button>

<style>
    button {
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        color: #fff;
        font-size: 1rem;
        max-width: 15em;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    button:hover {
        background-color: #fff;
        color: var(--color-primary);
    }
</style>