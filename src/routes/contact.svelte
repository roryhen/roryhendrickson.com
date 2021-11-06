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

<Spacer />

<hr />

<Spacer />

<Section card={true}>
  <form name="contact" method="POST" data-netlify="true">
    <p>
      <label>Your Name: <input type="text" name="name" /></label>
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" /></label>
    </p>
    <p>
      <label
        >Your Role: <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select></label
      >
    </p>
    <p>
      <label>Message: <textarea name="message" /></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
</Section>

<style>
  hr {
    height: 2px;
    width: 7ch;
    background: var(--heading-text-color);
    border: none;
    font-size: 12vmin;
  }
</style>
