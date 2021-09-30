<script>
  export let open = false;
  export let justify = "right";
</script>

<button on:click={() => (open = !open)} class={justify} class:open>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="33"
    height="7"
    viewBox="0 0 33 7"
  >
    <circle cx="3.5" cy="3.5" r="3.5" />
    <circle cx="3.5" cy="3.5" r="3.5" transform="translate(13)" />
    <circle cx="3.5" cy="3.5" r="3.5" transform="translate(26)" />
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="33"
    height="7"
    viewBox="0 0 33 7"
  >
    <circle cx="3.5" cy="3.5" r="3.5" />
    <circle cx="3.5" cy="3.5" r="3.5" transform="translate(13)" />
    <circle cx="3.5" cy="3.5" r="3.5" transform="translate(26)" />
    <rect />
  </svg>
</button>

<style lang="postcss">
  button {
    position: fixed;
    inset-block-end: 1.5rem;
    width: 3rem;
    height: 3rem;
    padding: 0;
    background: none;
    border: 0;
    display: grid;
    align-items: center;
    cursor: pointer;
  }

  .right {
    inset-inline-end: 1.5rem;
  }

  .center {
    inset-inline-start: 50%;
    transform: translateX(-50%);
  }

  .left {
    inset-inline-start: 1.5rem;
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
