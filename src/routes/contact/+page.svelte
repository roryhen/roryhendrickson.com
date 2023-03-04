<!-- src/routes/contact/+page.svelte -->
<svelte:head>
  <title>Contact</title>
</svelte:head>

<h1>Contact</h1>

<p>What do you want to talk about? Let me know below.</p>

<section>
  <form
    name="contact"
    action="/thank-you"
    method="POST"
    data-netlify="true"
    class="card"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p class="form-row">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" />
    </p>
    <p class="form-row">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" required />
    </p>
    <p class="form-row">
      <label for="message">Message</label>
      <textarea name="message" id="message" rows="5" />
    </p>
    <p class="form-row submit">
      <button class="button" type="submit">Send</button>
    </p>
  </form>
</section>

<style lang="postcss">
  form {
    justify-self: center;
    width: 100%;
    max-width: 40rem;
    display: grid;
    gap: var(--size-7);

    @media (--sm-vw) {
      gap: var(--size-5);
    }
  }

  .form-row {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--size-5);

    @media (--sm-vw) {
      grid-template: auto 1fr / minmax(0, 1fr);
      gap: var(--size-2);
    }

    & label {
      padding-block-start: var(--size-2);

      @media (--sm-vw) {
        padding-block-start: 0;
      }
    }

    & :where(input, textarea, select) {
      grid-column: span 3;
    }
  }

  .submit .button {
    grid-column: 4;

    @media (--sm-vw) {
      grid-column: 1;
    }
  }
</style>
