<!-- src/lib/PageTransition.svelte -->
<script>
  import { fly } from "svelte/transition";
  export let refresh = "";
</script>

{#key refresh}
  <main
    in:fly={{ y: -5, duration: 500, delay: 500 }}
    out:fly={{ y: 5, duration: 500 }}>
    <slot />
  </main>
{/key}
