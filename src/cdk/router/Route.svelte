<script>
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	/**
	 * The component to display if the route is active.
	 */
	export let component;
	/**
	 * The route path pattern to define if the route is active or not.
	 */
	export let pattern;

	const currentRoute = getContext('route');

	$: leftOrRight = $currentRoute?.comesFrom === 'left' ? -1 : 1;

	$: routePathMatchSpecifiedPattern =
		$currentRoute?.path === pattern || $currentRoute?.path.startsWith(pattern + '/');

	$: routeMustBeDisplayed = routePathMatchSpecifiedPattern;

	
</script>

{#if routeMustBeDisplayed}
	<div
		in:fly={{ delay: 300, duration: 500, x: 500 * leftOrRight, opacity: 0 }}
		out:fly={{ delay: 0, duration: 280, x: -500 * leftOrRight, opacity: 0 }}
	>
		<svelte:component this={component} />
	</div>
{/if}
