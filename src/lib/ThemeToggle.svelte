<!-- src/lib/ThemeToggle.svelte -->
<script>
  import { onMount } from "svelte";

  export let size = "1em";
  export let pad = "0.15em";
  export let dark = false;
  let mounted = false
  let transition = false

  function toggle() {
    dark = !dark
  }

  $: if (mounted) {
      let theme = dark ? "dark" : "light";
      localStorage.setItem("theme", theme);
      document.firstElementChild.dataset.theme = theme;
    }

  onMount(function () {
    dark = localStorage.theme === "dark";
    mounted = true
  });

  function addTransition() {
    transition = true
  }
</script>

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

<button class="toggle" class:dark style="--toggle-size: {size}; --toggle-pad: {pad};" on:click={toggle}>
    <span class="handle" class:mounted class:transition on:animationend={addTransition}>
      <span class="sr-only">Light</span>
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
      <span class="sr-only">Dark</span>
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
</button>

<style lang="postcss">
  button {
    all: unset;
  }

  button:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }
  
  .toggle {
    position: relative;
    font-size: var(--font-size-5);
    font-weight: bold;
    letter-spacing: -0.05em;
    user-select: none;
    cursor: pointer;
    line-height: 1;
    box-sizing: content-box;
    width: calc(var(--toggle-size) * 2);
    height: auto;
    padding: var(--toggle-pad);
    vertical-align: calc(var(--toggle-pad) * -0.8);
    background: rgb(0 0 0 / 0.3);
  }

  .toggle,
  .handle {
    display: inline-block;
    border-radius: 2em;
  }

  .handle {
    opacity: 0;
    display: grid;
    place-items: center;
    height: var(--toggle-size);
    width: var(--toggle-size);
    background: rgb(255 255 255);
    box-shadow: 0 0.25em 0.5em rgb(0 0 0 / 0.2);
  }
  
  .mounted {
    animation: fadeIn 180ms ease-out forwards;
  }

  .transition {
    transition: transform 180ms ease;
  }
  
  @keyframes fadeIn {
    to { opacity: 1; }
  }

  .dark {
    background: rgb(0 0 0 / 0.5);
  }

  .dark .handle {
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

  .dark .icon-tabler-moon {
    opacity: 1;
  }

  .dark .icon-tabler-sun {
    opacity: 0;
  }
</style>
