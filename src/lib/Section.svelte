<!-- src/lib/Section.svelte -->
<script>
  export let fullWidth = false;
</script>

<section class:fullWidth>
  <slot />
</section>

<style lang="postcss">
  section {
    display: grid;
    min-height: var(--section-height, auto);
    place-items: var(--section-place-items);
    place-content: var(--section-place-content);
    padding: var(--section-padding);
    gap: var(--section-gap);
    grid-template-columns: var(--section-columns);
    grid-template-rows: var(--section-rows);
  }

  .fullWidth {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  @media (max-width: 720px) {
    section {
      min-height: auto;
    }
  }
</style>
