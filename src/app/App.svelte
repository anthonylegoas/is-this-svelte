<script>
  import { Link } from './cdk';
  import Header from './header/Header.svelte'
</script>

<main>
  <Header/>
  <section>
    <Link href="https://github.com/anthonylegoas/is-this-svelte">
      More about the extension
    </Link>
  </section>
</main>

<style>
  main {
    width: 200px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section {
    width: 100%;
    border-top: 1px solid #ddd;
    padding-top: 2rem;
  }
</style>
