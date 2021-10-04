<!-- src/routes/__layout.svelte -->
<script>
  import "../app.postcss";
  import { page } from "$app/stores";
  import { fade, fly } from "svelte/transition";
  import MenuToggle from "$lib/MenuToggle.svelte";
  import Logo from "$lib/Logo.svelte";
  import ThemeToggle from "$lib/ThemeToggle.svelte";
  import PageTransition from "$lib/PageTransition.svelte";

  let open;

  function hideMenu(event) {
    if (event.target.matches("a")) {
      open = false;
    }
  }
</script>

<svelte:head>
  <meta name="color-scheme" content="dark light" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header>
  <nav>
    <!-- <Logo w="50" h="50" color="var(--link-text-color)" /> -->
    <a href="/">Home</a>
    <a href="/work">Work</a>
    <a href="/blog">Blog</a>
    <a href="/contact">Contact</a>
    <ThemeToggle />
  </nav>
</header>

<!-- <PageTransition refresh={$page.path}>
  <slot />
</PageTransition> -->

<main>
  <slot />
</main>

<footer>
  <p><span>&reg;</span>2021 Rory Hendrickson</p>
</footer>

<div class="mobile-menu">
  {#if open}
    <nav transition:fly={{ y: 100 }} on:click={hideMenu}>
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
    align-items: center;
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
