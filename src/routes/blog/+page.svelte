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
      <article class="post">
        <a class="link" href="/blog/{post.slug}">
          <h2 class="heading">{post.title}</h2>
        </a>
        <time class="date" datetime={post.date}>{post.date}</time>
        <p class="desc">{post.description}</p>
        <a class="link more" href="/blog/{post.slug}/"> Read more &gt; </a>
      </article>
    </section>
  {/if}
{/each}

<!-- TODO: add proper pagination -->
<style lang="postcss">
  .heading {
    margin-block-end: var(--size-2);
  }

  .date {
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-6);
    letter-spacing: var(--font-letterspacing-4);
    color: var(--text1);

    @media (--sm-vw) {
      font-size: var(--font-size-1);
    }
  }

  .desc {
    margin-block-end: 0;
  }

  .link {
    cursor: pointer;
  }

  .more {
    font-size: var(--font-size-2);
  }
</style>
