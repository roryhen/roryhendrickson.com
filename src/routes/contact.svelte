<!-- src/routes/contact.svelte -->
<script>
  import Spacer from "$lib/Spacer.svelte";
  import Section from "$lib/Section.svelte";
</script>

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
