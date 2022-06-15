<script>
  import About from './about/About.svelte';
  import Actions from './actions/Actions.svelte';
  import ConfigForm from './config/ConfigForm.svelte';
  import Footer from './footer/Footer.svelte';
  import Header from './header/Header.svelte';
  import { Router, Route } from '../cdk';
</script>

<Header/>
<main>
  <section>
    <Router>
      <Route component={Actions} pattern="home"/>
      <Route component={ConfigForm} pattern="config"/>
      <Route component={About} pattern="about"/>
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
