<!-- src/lib/Section.svelte -->
<script>
  export let card;
</script>

<section class:card>
  <slot />
</section>

<style>
  section {
    min-height: var(--section-height, 90vh);
  }

  @media (max-width: 500px) {
    section {
      min-height: auto;
    }
  }

  .card {
  }
</style>
