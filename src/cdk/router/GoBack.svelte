<script lang="ts">
	import { goBack } from '$lib/stores';

	const buttonClickHandler = () => goBack();
</script>

<button
	class="vtmn-typo_text-3 vtmn-flex vtmn-items-center"
	on:click={buttonClickHandler}
	data-testid="go-back__button"
>
	Back
</button>

<style>
	button {
		width: fit-content;
	}
</style>
