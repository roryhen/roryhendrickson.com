<!-- src/routes/index.svelte -->
<script>
  import Spacer from "$lib/Spacer.svelte";
  import Section from "$lib/Section.svelte";
</script>

<svelte:head>
  <title>Rory Web Dev</title>
</svelte:head>

<Section --section-height="90vh">
  <h1>Welcome</h1>
  <p>
    Hi there, my name's Rory. I look at the details. I solve problems. Let's
    build it the right way together.
  </p>
  <Spacer />
  <p>
    <a href="/contact" class="button">Get in touch</a>
  </p>
</Section>
