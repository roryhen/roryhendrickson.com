<!-- src/routes/work.svelte -->
<script>
  let projects = [
    {
      site: "christykerns.com",
      client: "Design Agency",
      service: "WordPress Development",
      images: [
        "/portfolio/www.christykerns.com_desktop.png",
        "/portfolio/www.christykerns.com_mobile.png",
      ],
    },
    {
      site: "spacebaragency.com",
      client: "SEO Agency",
      service: "Web App Development",
      images: ["/portfolio/spacebaragency.com_seo-audit.png"],
    },
    {
      site: "qoto.com",
      client: "eCommerce Startup",
      service: "Shopify Development",
      images: [
        "/portfolio/qoto-shop.myshopify.com_desktop.png",
        "/portfolio/qoto-shop.myshopify.com_mobile.png",
      ],
    },
  ];
</script>

<svelte:head>
  <title>My Work</title>
</svelte:head>

<h1>My Work</h1>

{#each projects as project, i}
  <article>
    <div>
      <h2>Project #{i + 1}</h2>
      <ul class="project-details">
        <li><span>Site:</span> {project.site}</li>
        <li><span>Client:</span> {project.client}</li>
        <li><span>Service:</span> {project.service}</li>
      </ul>
    </div>
    {#each project.images as imageSrc}
      <figure>
        <img src={imageSrc} alt="Site screenshot" />
        <figcaption />
      </figure>
    {/each}
  </article>
{/each}

<style>
  article {
    display: flex;
    flex-flow: row wrap;
    gap: 5rem;
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
