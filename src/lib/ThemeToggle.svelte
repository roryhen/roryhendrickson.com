<!-- src/lib/ThemeToggle.svelte -->
<script>
  import { onMount } from "svelte";

  export let size = "1em";
  export let pad = "0.15em";
  export let checked = false;

  function toggle() {
    let theme = checked ? "light" : "dark";
    document.firstElementChild.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }

  onMount(() => {
    checked = localStorage.theme === "dark";
  });
</script>

<svelte:window on:load={() => document.body.classList.remove("preload")} />

<svelte:head>
  <script>
    !(function () {
      let theme;
      if ("theme" in localStorage) {
        theme = localStorage.theme;
      } else {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }
      localStorage.setItem("theme", theme);
      document.firstElementChild.dataset.theme = theme;
    })();
  </script>
</svelte:head>

<label class="toggle" style="--toggle-size: {size}; --toggle-pad: {pad};">
  <span class="sr-only">Light</span>
  <input type="checkbox" bind:checked on:click={toggle} class="sr-only" />
  <span class="wrapper">
    <span class="handle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler-sun"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke="#000000"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="4" />
        <path
          d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler-moon"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      </svg>
    </span>
  </span>
  <span class="sr-only">Dark</span>
</label>

<style lang="postcss">
  .toggle {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: -0.05em;
    user-select: none;
    cursor: pointer;
    line-height: 1;
  }

  .toggle:focus-within {
    outline: -webkit-focus-ring-color auto 1px;
  }

  .toggle [type="checkbox"] {
    visibility: hidden;
    position: absolute;
  }

  .wrapper,
  .handle {
    display: inline-block;
    border-radius: 2em;
  }

  .wrapper {
    box-sizing: content-box;
    width: calc(var(--toggle-size) * 2);
    height: auto;
    padding: var(--toggle-pad);
    vertical-align: calc(var(--toggle-pad) * -0.8);
    background: rgb(0 0 0 / 0.3);
  }

  .handle {
    display: grid;
    place-items: center;
    height: var(--toggle-size);
    width: var(--toggle-size);
    background: rgb(255 255 255);
    transition: transform 180ms ease;
    box-shadow: 0 0.25em 0.5em rgb(0 0 0 / 0.2);
  }

  .toggle input:checked ~ .wrapper {
    background: rgb(0 0 0 / 0.5);
  }

  .toggle input:checked ~ .wrapper .handle {
    background: rgb(255 255 255 / 0.8);
    transform: translatex(100%);
  }

  .icon {
    grid-area: 1/1;
    width: 80%;
    height: 80%;
    stroke: var(--brand);
    transition: opacity 250ms;
  }

  .icon-tabler-moon {
    opacity: 0;
    stroke: var(--surface2);
  }

  .toggle input:checked ~ .wrapper .icon-tabler-moon {
    opacity: 1;
  }

  .toggle input:checked ~ .wrapper .icon-tabler-sun {
    opacity: 0;
  }
</style>
