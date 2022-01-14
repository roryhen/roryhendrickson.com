<!-- src/routes/work.svelte -->
<script>
  import { projects } from "$lib/projects.js";
</script>

<svelte:head>
  <title>Work</title>
</svelte:head>

<h1>Work</h1>
<p>Here are some the projects that I've enjoyed working on.</p>

{#each projects as project, i}
  <section>
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
  </section>
{/each}

<style lang="postcss">
  section {
    place-content: center;
    gap: 2rem;
  }

  h3 {
    font-size: 0.9rem;
    font-family: var(--body-font);
    margin-block-end: 0.5rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  ul {
    max-width: 40rem;
    margin: auto;
    display: flex;
    flex-flow: column;
    gap: 1rem;
  }
</style>
