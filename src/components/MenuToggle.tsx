import { createSignal } from "solid-js";
// @ts-types="npm:@types/css-modules"
import ss from "./MenuToggle.module.css";
import { cl } from "@/lib/utils.ts";

export function MenuToggle() {
  const [isOpen, setIsOpen] = createSignal(false);

  function handleOpen() {
    const nav = document.querySelector(".nav");
    nav?.classList.toggle("open");
    setIsOpen((c) => !c);
  }

  return (
    <button type="button" class={cl(ss.button, isOpen() && ss.open)} onClick={handleOpen}>
      <span class="sr-only">Toggle Menu</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
        <defs>
          <circle id="dot" cx="3.5" cy="3.5" r="3.5" />
        </defs>
        <g class={ss.three_dots}>
          <use href="#dot" x="0" y="13" />
          <use href="#dot" x="13" y="13" />
          <use href="#dot" x="26" y="13" />
        </g>
        <g class={ss.three_dots}>
          <use href="#dot" x="0" y="13" />
          <use href="#dot" x="13" y="13" />
          <use href="#dot" x="26" y="13" />
        </g>
      </svg>
    </button>
  );
}
