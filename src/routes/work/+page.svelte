<script>
  import { projects } from "$lib/data/projects.js"
</script>

<svelte:head>
  <title>Work</title>
</svelte:head>

<h1>Work</h1>
<p>Here are some the projects that I've enjoyed working on.</p>

{#each projects as project, i}
  <section>
    <picture>
      <source
        width="1340"
        height="800"
        srcset={project.image}
        type="image/webp" />
      <img
        srcset={project.fallbackImage}
        alt={`Site screenshot of ${project.site}`}
        decoding="async"
        width="1340"
        height="800"
        loading={i > 0 ? "lazy" : "eager"}
        sizes="(min-width: 1024px) 800px, 100vw" />
    </picture>
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
    gap: var(--size-7);
  }

  h3 {
    font-size: 0.875rem;
    font-family: var(--body-font);
    margin-block-end: var(--size-2);
    letter-spacing: var(--font-letterspacing-4);
    text-transform: uppercase;
  }

  ul {
    list-style-type: none;
    max-width: 40rem;
    margin: auto;
    display: flex;
    flex-flow: column;
    gap: var(--size-3);
  }
</style>
