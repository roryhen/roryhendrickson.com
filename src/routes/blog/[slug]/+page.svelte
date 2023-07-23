<script>
  /** @type {import('./$types').PageData} */
  export let data

  let post = data.post
</script>

<svelte:head>
  <title>{post.title}</title>

  <meta name="twitter:title" content={post.title} />
  <meta name="twitter:description" content={post.description} />
  <meta name="og:title" content={post.title} />
  <meta name="og:description" content={post.description} />
  <meta name="Description" content={post.description} />
</svelte:head>

<article class="post">
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <h1 class="title">{@html post.title}</h1>
  <div class="metadata">
    <time class="date" datetime={post.date}>{post.date}</time>
    <div class="tags">
      {#each post.tags as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>
  </div>

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html post.html}
</article>

<nav class="pagination">
  <!-- TODO: add proper pagination -->
  <a href="/blog/">&lt; Back</a>
</nav>

<style lang="postcss">
  .title,
  .post :global(:is(h2, h3, h4, h5, h6)) {
    margin-block-end: var(--size-3);
  }

  .title {
    overflow-wrap: break-word;
  }

  .metadata {
    display: flex;
    flex-flow: row wrap;
    gap: var(--size-5);
    margin-block: var(--size-3) var(--size-7);

    @media (--sm-vw) {
      gap: var(--size-2);
    }

    & .date {
      font-size: var(--font-size-2);
      font-weight: 600;
      letter-spacing: var(--font-letterspacing-4);
    }
  }

  .tags {
    font-size: var(--font-size-1);
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: var(--size-2);

    & .tag {
      display: inline-block;
      padding: 0.25em 0.75em;
      border-radius: var(--radius-round);
      line-height: var(--font-lineheight-00);
      background: var(--brand);
      color: var(--surface1);
    }

    & .tag:hover,
    & .tag:active {
      filter: brightness(1.3);
    }
  }

  .pagination {
    display: flex;
    gap: var(--size-9);
    justify-content: center;
  }

  .post {
    & :global(:where(p, ul, ol)) {
      margin-block-end: var(--size-7);
    }

    & :global(:where(ul, ol)) {
      list-style-type: disc;
      padding-inline-start: var(--size-7);
    }
  }
</style>
