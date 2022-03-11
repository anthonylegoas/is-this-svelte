<script>
  import { Link } from '../cdk';
  import ConfigForm from './config/ConfigForm.svelte'
  import Header from './header/Header.svelte'
</script>

<main>
  <Header/>
  <section>
    <ConfigForm/>
  </section>
  <footer>
    <Link href="https://github.com/anthonylegoas/is-this-svelte">
      More about the extension
    </Link>
  </footer>
</main>

<style>
  main {
    width: 200px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section, footer {
    width: 100%;
    border-top: 1px solid #ddd;
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  footer {
    border-top: none;
  }

</style>
