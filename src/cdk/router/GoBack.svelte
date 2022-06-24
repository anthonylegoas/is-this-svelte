<script>
	import { goBack } from './router.store';
    import Icon from '../icon/Icon.svelte'

	const buttonClickHandler = () => goBack();
</script>

<button
	on:click={buttonClickHandler}
	data-testid="go-back__button"
>
<Icon name="chevron-left" size="12"/>
<span>Back</span>
</button>

<style>
    button {
		    width: 100%;
        background-color: #fff;
		    border: none;
        color: var(--color-primary);
        font-size: 0.75rem;
        padding: 0.5rem 0;
        border-radius: 4px;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
		    display: flex;
		    align-items: center;
		    justify-content: flex-start;
    }

    button:hover {
		    background-color: rgba(255, 62, 0, .1);
    }
</style>
