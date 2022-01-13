<!-- src/routes/index.svelte -->
<script>
  import Section from "$lib/Section.svelte";
</script>

<svelte:head>
  <title>Rory Web Dev</title>
</svelte:head>

<h1>Welcome</h1>

<div>
  <Section>
    <p>
      Hello, my name is Rory. I learn, live, and love web development. I geek
      out over the details. I build projects with experience and best practices
      in my toolbelt.
    </p>
    <p>
      <a sveltekit:prefetch href="/contact" class="button">Get in touch</a>
    </p>
  </Section>
  <Section>
    <p class="justify-right">
      Need some bugs fixed? Have an eCommerce website? Want to integrate a third
      party app with your current setup? I can help with that.
    </p>
    <p class="justify-right">
      <a sveltekit:prefetch href="/work" class="button">See my work</a>
    </p>
  </Section>
  <Section>
    <p>
      I don't have room in my head for the various solutions and concepts I've
      learned while tooling around with tech, so I've documented some of it.
    </p>
    <p>
      <a sveltekit:prefetch href="/blog" class="button">Have a read</a>
    </p>
  </Section>
</div>

<style lang="postcss">
  div {
    --section-height: 60vh;
    --section-alignment: center;
    --section-padding: 5% 0;
    --section-gap: 2rem;
    --section-columns: 1fr 1fr 1fr;
  }

  h1,
  p {
    grid-column: span 2;
  }

  .justify-right {
    grid-column: 2 / span 2;
  }
</style>
