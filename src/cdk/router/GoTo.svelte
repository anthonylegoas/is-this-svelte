<script>
	import { goTo } from './router.store';

	/**
	 * Indicates the direction of the navigation animation.
	 */
	export let comesFrom = 'right';
	/**
	 * The route on which to nagivate.
	 */
	export let to;

	const buttonClickHandler = () => goTo(to, comesFrom);
</script>

<button
	on:click={buttonClickHandler}
	data-testid="go-to__button"
	{...$$restProps}
>
	<slot />
</button>

<style>
    button {
		width: 100%;
        background-color: #fff;
		border: none;
        color: var(--color-primary);
        font-size: 0.75rem;
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
