<script lang="ts">
	import { setContext } from 'svelte';
	import { currentRoute } from './router.store';

	setContext('route', currentRoute);
</script>

<slot />
