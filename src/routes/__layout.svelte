<!-- src/routes/__layout.svelte -->
<script>
  import "../app.postcss";
  import MenuToggle from "$lib/MenuToggle.svelte";
  import ThemeToggle from "$lib/ThemeToggle.svelte";

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
    <svg viewBox="0 0 100 100" width="60" height="60">
      <use href="/rh-dev-logo.svg#icon" />
    </svg>
    <a href="/">Home</a>
    <a sveltekit:prefetch href="/work">Work</a>
    <a sveltekit:prefetch href="/blog">Blog</a>
    <a sveltekit:prefetch href="/contact">Contact</a>
    <ThemeToggle />
  </nav>
  {#if mobileView}
    <svg viewBox="0 0 100 100" width="60" height="60">
      <use href="/rh-dev-logo.svg#icon" />
    </svg>
    <MenuToggle bind:open />
  {/if}
</header>

<main>
  <slot />
</main>

<footer>
  <p class="social">
    <a href="https://codepen.io/roryhen" rel="noreferrer noopener">
      <svg viewBox="0 0 24 24" width="24" height="24"
        ><use href="/codepen.svg#icon" /></svg>
    </a>
    <a href="https://github.com/roryhen" rel="noreferrer noopener">
      <svg viewBox="0 0 24 24" width="24" height="24"
        ><use href="/github.svg#icon" /></svg>
    </a>
  </p>
  <p>
    <span class="copyright-c">&copy;</span>{new Date().getFullYear()} Rory Hendrickson
  </p>
</footer>

<style lang="postcss">
  nav {
    display: flex;
    flex-flow: row wrap;
    gap: 2.6rem;
    align-items: center;
    justify-content: space-between;
  }

  header {
    padding: 2rem 0;

    & svg {
      fill: var(--brand);
    }

    @media (--sm-vw) {
      padding: 2rem 0 0;
      margin: auto;
    }
  }

  footer {
    align-self: center;
    padding: 3rem 0;
    text-align: center;
    font-size: 1rem;
  }

  .social {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    justify-content: center;
    margin-block-end: 2rem;

    & svg {
      width: 5rem;
      height: 5rem;
      fill: currentColor;
    }
  }

  .copyright-c {
    padding-inline-end: 0.1rem;
  }

  @media (--sm-vw) {
    nav {
      position: fixed;
      inset: 0 0 0 0;
      flex-flow: column nowrap;
      gap: 2rem;
      align-items: center;
      justify-content: center;
      background: var(--surface1);
      font-size: 2rem;

      transition: opacity 0.2s, transform 0.2s;
      opacity: 0;
      transform: translateY(15px);
      pointer-events: none;
      z-index: 1;

      & svg,
      & :global(label) {
        margin-block: 1rem;
      }
    }

    .open nav {
      opacity: 1;
      transform: translateY(0);
      pointer-events: all;
    }
  }
</style>
