<!-- src/routes/work.svelte -->
<script>
  import { projects } from "$lib/projects.js";
  import Section from "$lib/Section.svelte";
</script>

<svelte:head>
  <title>Work</title>
</svelte:head>

<h1>Work</h1>
<p>Here are some the projects that I've enjoyed working on.</p>

{#each projects as project, i}
  <Section
    --section-alignment="center"
    --section-gap="2rem"
    --section-padding="5% 0">
    <figure>
      <img
        srcset={project.image}
        alt="Site screenshot"
        decoding="async"
        width="1340"
        height="800" />
    </figure>
    <h2>Project #{i + 1}</h2>
    <ul class="card">
      <li>
        <h3>Site</h3>
        <p>{project.site}</p>
      </li>
      <li>
        <h3>Client</h3>
        <p>{project.client}</p>
      </li>
      <li>
        <h3>Service</h3>
        <p>{project.service}</p>
      </li>
      <li>
        <h3>Details</h3>
        <p>{project.notes}</p>
      </li>
    </ul>
  </Section>
{/each}

<style lang="postcss">
  h3 {
    font-size: 1.2rem;
    font-family: var(--body-font);
    margin-block-end: 0.2rem;
  }

  ul {
    display: flex;
    flex-flow: column;
    gap: 0.8rem;
  }
</style>
