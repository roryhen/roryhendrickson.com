<!-- src/routes/work.svelte -->
<script>
  import { projects } from "$lib/projects.js";
</script>

<svelte:head>
  <title>Work</title>
</svelte:head>

<h1>Work</h1>

{#each projects as project, i}
  <article>
    {#each project.images as imageSrc}
      <figure>
        <img src={imageSrc} alt="Site screenshot" />
        <figcaption />
      </figure>
    {/each}
    <div>
      <h2>Project #{i + 1}</h2>
      <ul class="project-details">
        <li><span>Site:</span> {project.site}</li>
        <li><span>Client:</span> {project.client}</li>
        <li><span>Service:</span> {project.service}</li>
      </ul>
    </div>
  </article>
{/each}

<style>
  article {
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    margin-block-end: 4rem;
  }

  img {
    width: 100%;
    height: auto;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li span {
    font-weight: 600;
  }
</style>
