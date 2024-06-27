import { createEffect, createSignal, onMount } from "solid-js";
import ss from "./ThemeToggle.module.css";

export function ThemeToggle() {
  let [theme, setTheme] = createSignal<"light" | "dark">("light");
  let [hasTransition, setHasTransition] = createSignal(false);

  function toggle() {
    setTheme((c) => (c === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme());
  }

  function addTransition() {
    setHasTransition(true);
  }

  onMount(() => {
    const themePreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(localStorage.theme || themePreference);
  });

  createEffect(() => {
    (document.firstElementChild as HTMLElement).dataset.theme = theme();
  });

  return (
    <button
      classList={{
        [ss.button]: true,
        [ss.toggle]: true,
        [ss.dark]: theme() === "dark",
      }}
      style="--toggle-size: 1em; --toggle-pad: 0.15em;"
      onClick={toggle}
    >
      <span
        classList={{ [ss.handle]: true, [ss.transition]: hasTransition() }}
        onAnimationEnd={addTransition}
      >
        <span class="sr-only">Light</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class={`${ss.icon} ${ss.iconSun}`}
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke="#000000"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="4" />
          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </svg>
        <span class="sr-only">Dark</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class={`${ss.icon} ${ss.iconMoon}`}
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </svg>
      </span>
    </button>
  );
}
