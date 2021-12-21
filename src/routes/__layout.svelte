<!-- src/routes/__layout.svelte -->
<script>
  import "../app.postcss";
  import MenuToggle from "$lib/MenuToggle.svelte";
  import ThemeToggle from "$lib/ThemeToggle.svelte";
  import Logo from "$lib/Logo.svelte";

  let open;
  let innerWidth;

  $: mobileView = innerWidth < 720;

  $: open = !mobileView;

  function hideMenu(event) {
    if (mobileView && event.target.matches("a")) {
      open = false;
    }
  }
</script>

<svelte:window bind:innerWidth />

<svelte:head>
  <meta name="color-scheme" content="dark light" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap"
    rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@125,700&display=swap"
    rel="stylesheet" />
</svelte:head>

<header class:open>
  <nav on:click={hideMenu}>
    <Logo --logo-color="var(--heading-text-color)" />
    <a href="/">Home</a>
    <a href="/work">Work</a>
    <a href="/blog">Blog</a>
    <a href="/contact">Contact</a>
    <ThemeToggle />
  </nav>
  {#if mobileView}
    <MenuToggle bind:open />
  {/if}
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
    gap: 2rem;
    padding: 2rem 0;
    align-items: center;
    justify-content: flex-end;
  }

  nav :nth-child(1) {
    margin-inline-end: auto;
  }

  footer {
    align-self: center;
    padding: 2rem 0;
    text-align: center;
    font-size: 1rem;
    color: var(--accent-text-color);
    & span {
      vertical-align: -20%;
      font-size: 1.4rem;
      padding-inline-end: 0.1rem;
    }
  }

  @media (max-width: 720px) {
    nav {
      position: fixed;
      inset: 0 0 0 0;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      background: var(--bg-color);
      font-size: 3rem;

      transition: opacity 0.2s, transform 0.2s;
      opacity: 0;
      transform: translateY(15px);
      pointer-events: none;
    }

    .open nav {
      opacity: 1;
      transform: translateY(0);
      pointer-events: all;
    }

    main {
      padding-block-start: 4rem;
    }
  }
</style>
