<!-- src/lib/MenuToggle.svelte -->
<script>
  export let open = false;
  export let left = false;
</script>

<button on:click={() => (open = !open)} class:left class:open>
  <span class="sr-only">Toggle Menu</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
    viewBox="0 0 33 33">
    <defs>
      <circle id="dot" cx="3.5" cy="3.5" r="3.5" />
    </defs>
    <g class="three_dots">
      <use href="#dot" x="0" y="13" />
      <use href="#dot" x="13" y="13" />
      <use href="#dot" x="26" y="13" />
    </g>
    <g class="three_dots">
      <use href="#dot" x="0" y="13" />
      <use href="#dot" x="13" y="13" />
      <use href="#dot" x="26" y="13" />
    </g>
  </svg>
</button>

<style lang="postcss">
  button {
    position: fixed;
    bottom: var(--size-5);
    right: var(--size-5);
    line-height: var(--font-lineheight-00);
    padding: var(--size-2) var(--size-3);
    background: none;
    border: 0;
    cursor: pointer;
    display: grid;
    z-index: var(--layer-1);
  }

  .left {
    left: var(--size-5);
  }

  .three_dots {
    fill: var(--text2);
    transition: transform 0.3s;
    transform-origin: center;
    transform: rotate(0);
  }

  .open .three_dots {
    transform: rotate(45deg);
  }

  .open .three_dots:nth-child(2) {
    transform: rotate(-45deg);
  }
</style>
