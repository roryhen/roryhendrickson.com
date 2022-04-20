<!-- src/routes/__layout.svelte -->
<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ url }) => ({
    props: {
      key: url,
    },
  });
</script>

<script>
  import "../app.postcss";
  import MenuToggle from "$lib/MenuToggle.svelte";
  import ThemeToggle from "$lib/ThemeToggle.svelte";
  import PageTransition from "$lib/PageTransition.svelte";

  export let key;
  let open = false;

  function hideMenu(event) {
    if (event.target.matches("a")) {
      open = false;
    }
  }

  function removePreload() {
    document.body.classList.remove("preload");
    // For mobile safari :active state
    document.addEventListener("touchstart", () => {}, { passive: true });
  }
</script>

<svelte:window on:load={removePreload} />

<svelte:head>
  <meta
    name="description"
    content="The personal/portfolio site of Web Developer, Rory Hendrickson." />
  <meta name="color-scheme" content="dark light" />
  <link
    rel="preload"
    as="font"
    type="font/woff"
    href="/fonts/ArchivoExpanded-Bold.woff"
    crossorigin />
  <link
    rel="preload"
    as="font"
    type="font/woff2"
    href="/fonts/space-grotesk-v10-latin-300.woff2"
    crossorigin />
</svelte:head>

<header>
  <nav on:click={hideMenu} class:open>
    <svg viewBox="0 0 100 100" width="60" height="60">
      <use href="/rh-dev-logo.svg#icon" />
    </svg>
    <a href="/">Home</a>
    <a sveltekit:prefetch href="/work/">Work</a>
    <a sveltekit:prefetch href="/blog/">Blog</a>
    <a sveltekit:prefetch href="/contact/">Contact</a>
    <ThemeToggle />
  </nav>
  <div class="mobile">
    <svg viewBox="0 0 100 100" width="60" height="60">
      <use href="/rh-dev-logo.svg#icon" />
    </svg>
    <MenuToggle bind:open />
  </div>
</header>

<PageTransition refresh={key}>
  <slot />
</PageTransition>

<footer>
  <p class="social">
    <a href="https://codepen.io/roryhen" rel="external">
      <span class="sr-only">Rory's Codepen</span>
      <svg viewBox="0 0 24 24" width="24" height="24"
        ><use href="/codepen.svg#icon" /></svg>
    </a>
    <a href="https://github.com/roryhen" rel="external">
      <span class="sr-only">Rory's GitHub</span>
      <svg viewBox="0 0 24 24" width="24" height="24"
        ><use href="/github.svg#icon" /></svg>
    </a>
    <a href="https://www.linkedin.com/in/rory-hendrickson/" rel="external">
      <span class="sr-only">Rory's LinkedIn</span>
      <svg viewBox="0 0 24 24" width="24" height="24"
        ><use href="/linkedin.svg#icon" /></svg>
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
      padding-block: 2rem 0;
    }
  }

  footer {
    align-self: center;
    padding: 3rem 0;
    text-align: center;
    font-size: 1rem;
  }

  .mobile {
    display: none;
  }

  .social {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    justify-content: center;
    margin-block-end: 2rem;

    & svg {
      width: 4.5rem;
      height: 4.5rem;
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
      padding: 10vh 0;
      display: grid;
      grid-auto-rows: auto;
      place-content: center;
      justify-items: center;
      gap: 2rem;
      background: var(--surface1);
      font-size: 1.8rem;

      opacity: 0;
      transform: translateY(15px);
      pointer-events: none;
      transition: opacity 0.2s, transform 0.2s;

      & svg,
      & :global(label) {
        margin-block: 1rem;
      }
    }

    .open {
      opacity: 1;
      transform: translateY(0);
      pointer-events: all;
      z-index: 1;
    }

    .mobile {
      display: block;
    }
  }
</style>
