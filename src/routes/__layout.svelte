<!-- src/routes/__layout.svelte -->
<script>
  import "../app.postcss";
  import MenuToggle from "../components/MenuToggle.svelte";
  import Logo from "../components/Logo.svelte";
  import { fly } from "svelte/transition";

  let open;
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
    <Logo w="50" h="50" color="var(--link-text-color);" />
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

<div class="mobile-menu">
  {#if open}
    <nav transition:fly={{ y: 100 }}>
      <Logo w="100" h="100" color="var(--link-text-color);" />
      <a href="/">Home</a>
      <a href="/work">Work</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
    </nav>
  {/if}
  <MenuToggle bind:open />
</div>

<style lang="postcss">
  nav {
    display: flex;
    flex-flow: row wrap;
    gap: 1.5rem;
    padding: 2rem 0;
  }

  header nav {
    display: none;
  }

  main {
    padding-block-start: 4rem;
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

  .mobile-menu nav {
    position: fixed;
    inset: 0 0 0 0;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background: var(--bg-color);
    font-size: 3rem;
  }

  @media (min-width: 500px) {
    .mobile-menu {
      display: none;
    }

    header nav {
      display: flex;
    }

    main {
      padding-block-start: 0;
    }
  }
</style>
