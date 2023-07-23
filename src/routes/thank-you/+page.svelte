<svelte:head>
  <title>Thank You</title>
</svelte:head>

<h1>Contact</h1>

<section>
  <p class="thank-you">Thank you for your submission!</p>
</section>

<style lang="postcss">
  section {
    place-content: center;
  }

  .thank-you {
    font-size: var(--font-size-5);
    animation: var(--animation-slide-in-up), var(--animation-fade-in);
    animation-duration: 1s;
    animation-timing-function: var(--ease-out-4);
  }
</style>
