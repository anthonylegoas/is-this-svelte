<script>
	import {goTo } from './router.store'

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
	class="goto-button mobile:vtmn-w-full"
	on:click={buttonClickHandler}
	data-testid="go-to__button"
	{...$$restProps}
>
	<slot />
</button>

<style>
	:global(.goto-button) {
		margin: 0 auto;
	}

	@media (max-width: 599px) {
		:global(.goto-button) {
			width: 100%;
		}
	}
</style>
