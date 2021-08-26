<!-- src/routes/__layout.svelte -->
<script>
  import "../app.postcss";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header>
  <nav>
    <a href="/">Home</a>
    <a href="/work">Work</a>
    <a href="/blog">Blog</a>
    <a href="/contact">Contact</a>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <p><span>&reg;</span>2021 Rory Hendrickson</p>
</footer>

<style lang="postcss">
  nav {
    display: flex;
    flex-flow: row wrap;
    gap: 1.5rem;
    padding: 3rem 0;
  }

  footer {
    align-self: center;
    padding: 2rem 0;
    text-align: center;
    font-size: 1.5rem;
    color: var(--accent-text-color);
  }

  footer span {
    vertical-align: -0.5rem;
    font-size: 2rem;
    line-height: 0.5;
  }
</style>
