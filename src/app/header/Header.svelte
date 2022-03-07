<script>
    import { Button, Logo } from '../cdk';

    const websiteUsesSvelte = true;
    $: usageText = `This website does ${websiteUsesSvelte ? '' : 'not'} use Svelte ${websiteUsesSvelte ? '😃' : '😭'}`;
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
    }
</style>