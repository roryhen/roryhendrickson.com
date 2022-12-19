<!-- src/routes/blog/+page.svelte -->
<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let posts = data.posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Blog</h1>
<p>Thoughts and some technical documentation.</p>

{#each posts as post}
  {#if post.published}
    <section>
      <article>
        <a href="/blog/{post.slug}">
          <h2>{post.title}</h2>
        </a>
        <time datetime={post.date}>{post.date}</time>
        <p>{post.description}</p>
        <a href="/blog/{post.slug}/">
          <span>Read more &gt;</span>
        </a>
      </article>
    </section>
  {/if}
{/each}

<!-- TODO: add proper pagination -->
<style lang="postcss">
  article {
    & p {
      margin-block-end: 0;
    }
    & a {
      cursor: pointer;
    }
    & a span {
      font-size: 1rem;
    }
  }
</style>
