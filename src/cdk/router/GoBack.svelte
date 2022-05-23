<script>
	import { goBack } from './router.store'

	const buttonClickHandler = () => goBack();
</script>

<button
	on:click={buttonClickHandler}
	data-testid="go-back__button"
>
	Back
</button>

<style>
    button {
        background-color: #fff;
		border: none;
        color: var(--color-primary);
        font-size: 1rem;
        max-width: 15em;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    button:hover {
        text-decoration: underline;
    }
</style>
