<script>
  import { Link } from './cdk';
  import Header from './header/Header.svelte'
</script>

<Header/>
<main>
  <Link href="https://github.com/anthonylegoas/is-this-svelte">
    More about the extension
  </Link>
</main>

<style>
  main {
    width: 300px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
