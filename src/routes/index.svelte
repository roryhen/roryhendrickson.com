<!-- src/routes/index.svelte -->
<script>
  import Section from "$lib/Section.svelte";
</script>

<svelte:head>
  <title>Rory Web Dev</title>
</svelte:head>

<Section
  --section-height="50vh"
  --section-alignment="center"
  --section-padding="5% 0"
  --section-gap="2rem">
  <h1>Welcome</h1>
  <p>
    Hi there, my name's Rory. I look at the details. I solve problems. Let's
    build it the right way together.
  </p>
  <p>
    <a href="/contact" class="button">Get in touch</a>
  </p>
</Section>
