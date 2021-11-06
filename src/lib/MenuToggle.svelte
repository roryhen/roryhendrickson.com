<!-- src/lib/MenuToggle.svelte -->
<script>
  export let open = false;
  export let left = false;
</script>

<button on:click={() => (open = !open)} class:left class:open>
  <svg
    id="#three_dots"
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="7"
    viewBox="0 0 33 7"
  >
    <circle cx="3.5" cy="3.5" r="3.5" />
    <circle cx="3.5" cy="3.5" r="3.5" transform="translate(13)" />
    <circle cx="3.5" cy="3.5" r="3.5" transform="translate(26)" />
  </svg>
  <use href="#three_dots" />
</button>

<style lang="postcss">
  button {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    width: 3rem;
    height: 3rem;
    padding: 0;
    background: none;
    border: 0;
    display: grid;
    align-items: center;
    cursor: pointer;
  }

  .left {
    left: 1.5rem;
  }

  svg {
    grid-area: 1/2;
    fill: var(--text-color);
    transition: transform 0.3s;
  }

  .open svg {
    transform: rotate(45deg);
  }

  .open svg:nth-child(2) {
    transform: rotate(-45deg);
  }
</style>
