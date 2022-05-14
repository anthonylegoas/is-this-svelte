<script>
  import Actions from './actions/Actions.svelte';
  import ConfigForm from './config/ConfigForm.svelte';
  import Footer from './footer/Footer.svelte';
  import Header from './header/Header.svelte';
  import { Router, Route } from '../cdk';
</script>

<main>
  <Header/>
  <section>
    <Router>
      <Route component={Actions} pattern="home"/>
      <Route component={ConfigForm} pattern="config"/>
    </Router>
  </section>
  <Footer/>
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
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
