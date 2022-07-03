<script>
    import { GoTo } from '../../cdk';
</script>

<nav>
    <ul>
        <li>
            <GoTo emoji="⚙️" to="config">Configure</GoTo>
        </li>
        <li>
            <GoTo emoji="🌎" to="websites">Svelte websites</GoTo>
        </li>
        <li>
            <GoTo emoji="ℹ️" to="about">About</GoTo>
        </li>
    </ul>
</nav>

<style>

    nav, ul, li {
        width: 100%;
        padding: 0;
        margin: 0;
    }
</style>