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
    class="card">
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
    width: 100%;
    max-width: 40rem;
    margin: auto;
  }
</style>
