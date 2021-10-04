<!-- src/lib/component/PageTransition.svelte -->
<script>
  import { fade } from "svelte/transition";
  export let refresh = "";
</script>

{#key refresh}
  <main in:fade out:fade>
    <slot />
  </main>
{/key}
