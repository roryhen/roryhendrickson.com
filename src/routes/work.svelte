<!-- src/routes/work.svelte -->
<script>
  import { projects } from "$lib/projects.js";
  import Section from "$lib/Section.svelte";
</script>

<svelte:head>
  <title>Work</title>
</svelte:head>

<h1>Work</h1>

{#each projects as project, i}
  <Section
    --section-alignment="center"
    --section-gap="2rem"
    --section-padding="5% 0">
    {#each project.images as imageSrc}
      <figure>
        <img src={imageSrc} alt="Site screenshot" />
        <figcaption />
      </figure>
    {/each}
    <h2>Project #{i + 1}</h2>
    <ul class="project-details">
      <li><span>Site:</span> {project.site}</li>
      <li><span>Client:</span> {project.client}</li>
      <li><span>Service:</span> {project.service}</li>
    </ul>
  </Section>
{/each}

<style>
  li span {
    font-weight: 600;
  }
</style>
