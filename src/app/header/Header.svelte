<script>
    import { Button, Logo } from '../../cdk';
    import { currentWebsiteUsesSvelte } from '../../store';

    $: usageText = `This website does ${$currentWebsiteUsesSvelte ? '' : 'not'} use Svelte ${$currentWebsiteUsesSvelte ? '😃' : '😭'}`;
</script>

<header>
    <Logo />
    <Button>Analyze website</Button>
    <p class="usage-text">{usageText}</p>
</header>

<style>
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p.usage-text {
        font-size: 0.825rem;
        color: var(--color-second);
        text-align: center;
    }
</style>