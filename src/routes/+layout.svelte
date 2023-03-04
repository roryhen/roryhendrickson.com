<!-- src/routes/+layout.svelte -->
<script>
  import "../app.postcss";
  import MenuToggle from "$lib/MenuToggle.svelte";
  import ThemeToggle from "$lib/ThemeToggle.svelte";
  import PageTransition from "$lib/PageTransition.svelte";
  /** @type {import('./$types').LayoutData} */
  export let data;
  let open = false;

  function hideMenu(event) {
    if (event.target.matches("a")) {
      open = false;
    }
  }

  $: if (open) {
    document.querySelector(".nav a").focus();
  }

  function afterLoad() {
    // For mobile safari :active state
    document.addEventListener("touchstart", () => {}, { passive: true });
  }
</script>

<svelte:window on:load={afterLoad} />

<svelte:head>
  <meta
    name="description"
    content="The personal/portfolio site of Web Developer, Rory Hendrickson."
  />
  <meta name="color-scheme" content="dark light" />
  <link
    rel="preload"
    as="font"
    type="font/woff"
    href="/fonts/ArchivoExpanded-Bold.woff"
    crossorigin
  />
  <link
    rel="preload"
    as="font"
    type="font/woff2"
    href="/fonts/space-grotesk-v10-latin-300.woff2"
    crossorigin
  />
</svelte:head>

<header class="header">
  <nav class="nav" on:click={hideMenu} on:keypress={() => {}} class:open>
    <svg class="logo" viewBox="0 0 100 100" width="60" height="60">
      <use href="/rh-dev-logo.svg#icon" />
    </svg>
    <a href="/">Home</a>
    <a href="/work/">Work</a>
    <a href="/blog/">Blog</a>
    <a href="/contact/">Contact</a>
    <ThemeToggle />
  </nav>
  <div class="mobile">
    <svg class="logo" viewBox="0 0 100 100" width="60" height="60">
      <use href="/rh-dev-logo.svg#icon" />
    </svg>
    <MenuToggle bind:open />
  </div>
</header>

<PageTransition refresh={data.key}>
  <slot />
</PageTransition>

<footer class="footer">
  <p class="social">
    <a href="https://codepen.io/roryhen" rel="external">
      <span class="sr-only">Rory's Codepen</span>
      <svg class="icon" viewBox="0 0 24 24" width="24" height="24"
        ><use href="/codepen.svg#icon" /></svg
      >
    </a>
    <a href="https://github.com/roryhen" rel="external">
      <span class="sr-only">Rory's GitHub</span>
      <svg class="icon" viewBox="0 0 24 24" width="24" height="24"
        ><use href="/github.svg#icon" /></svg
      >
    </a>
    <a href="https://www.linkedin.com/in/rory-hendrickson/" rel="external">
      <span class="sr-only">Rory's LinkedIn</span>
      <svg class="icon" viewBox="0 0 24 24" width="24" height="24"
        ><use href="/linkedin.svg#icon" /></svg
      >
    </a>
  </p>
  <p>
    <span class="copy">&copy;</span>{new Date().getFullYear()} Rory Hendrickson
  </p>
</footer>

<style lang="postcss">
  .nav {
    display: flex;
    flex-flow: row wrap;
    gap: var(--size-3);
    align-items: center;
    justify-content: space-between;
    font-size: var(--font-size-4);

    @media (--sm-vw) {
      position: fixed;
      inset: 0;
      padding: 10vh 0;
      display: grid;
      place-content: center;
      justify-items: center;
      gap: var(--size-7);
      background: var(--surface1);
      font-size: var(--font-size-5);

      opacity: 0;
      visibility: hidden;
      transform: translateY(var(--size-3));
      transition-property: all;
      transition-duration: 0.3s;
      transition-timing-function: var(--ease-out-3);

      &.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        z-index: var(--layer-1);
      }

      & .logo,
      & :global(.toggle) {
        margin-block: var(--size-3);
      }
    }
  }

  .header {
    padding: var(--size-7) 0;

    @media (--sm-vw) {
      padding-block: var(--size-7) 0;
    }

    & .logo {
      fill: var(--brand);
    }
  }

  .footer {
    align-self: center;
    padding: var(--size-8) 0;
    text-align: center;
    font-size: var(--font-size-3);
  }

  .mobile {
    display: none;

    @media (--sm-vw) {
      display: block;
    }
  }

  .social {
    display: flex;
    flex-flow: row wrap;
    gap: var(--size-3);
    justify-content: center;
    margin-block-end: var(--size-7);

    & .icon {
      width: 4.5rem;
      height: 4.5rem;
      fill: currentColor;
    }
  }

  .copy {
    padding-inline-end: var(--size-1);
  }
</style>
