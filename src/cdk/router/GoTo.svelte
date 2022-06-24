<script>
	import { goTo } from './router.store';
	import Icon from '../icon/Icon.svelte'

	/**
	 * Indicates the direction of the navigation animation.
	 */
	export let comesFrom = 'right';
	/**
	 * The emoji to display.
	 */
	export let emoji = null;
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
	<span>{emoji}</span>
	<span><slot /></span>
	<Icon name="chevron-right" size="12"/>
</button>

<style>
    button {
		width: 100%;
        background-color: #fff;
		border: none;
        color: var(--color-primary);
        font-size: 0.75rem;
        padding: 0.5rem 1rem;
		margin: 0;
        border-radius: 4px;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
    }

    button:hover {
		background-color: rgba(255, 62, 0, .1);
    }
</style>
