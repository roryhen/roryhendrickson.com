<!-- src/routes/blog/[slug].svelte -->
<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ params, fetch }) {
    const res = await fetch(`/blog/${params.slug}.json`);
    const post = await res.json();
    if (res.ok && post.published) {
      return { props: { post } };
    }
    return {
      status: 404,
      error: new Error("Post could not be found"),
    };
  }
</script>

<script>
  import Time from "$lib/Time.svelte";

  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>

  <meta name="twitter:title" content={post.title} />
  <meta name="twitter:description" content={post.description} />
  <meta name="og:title" content={post.title} />
  <meta name="og:description" content={post.description} />
  <meta name="Description" content={post.description} />
</svelte:head>

<article>
  <h1>{@html post.title}</h1>
  <div class="metadata">
    <Time date={post.date} />

    <div class="tags">
      {#each post.tags as tag}
        <span>{tag}</span>
      {/each}
    </div>
  </div>

  {@html post.html}
</article>

<nav class="pagination">
  <!-- TODO: add proper pagination -->
  <a href="/blog">&lt; Back</a>
</nav>

<style lang="postcss">
  .metadata {
    display: flex;
    flex-flow: row wrap;
    gap: 1.5rem;
    margin-block: 1rem 2rem;

    @media (--sm-vw) {
      gap: 0.5rem;
    }
  }

  .tags {
    font-size: 1rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 0.5rem;

    & span {
      display: inline-block;
      padding: 0.3em 0.8em;
      border-radius: 3em;
      line-height: 1;
      background: var(--brand);
      color: var(--surface1);
    }

    & span:hover,
    & span:active {
      filter: brightness(1.3);
    }
  }

  .pagination {
    display: flex;
    gap: 3rem;
    justify-content: center;
  }
</style>
