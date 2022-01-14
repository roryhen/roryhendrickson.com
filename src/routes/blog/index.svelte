<!-- src/routes/blog/index.svelte -->
<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ fetch }) {
    const res = await fetch(`/blog.json`);
    const posts = await res.json();
    if (res.ok) {
      return { props: { posts } };
    }
    return {
      status: 404,
      error: new Error("Posts could not be found"),
    };
  }
</script>

<script>
  import Time from "$lib/Time.svelte";

  export let posts;
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
        <a sveltekit:prefetch href="/blog/{post.slug}">
          <h2>{post.title}</h2>
        </a>
        <Time date={post.date} />
        <p>{post.description}</p>
        <a sveltekit:prefetch href="/blog/{post.slug}">
          <span>Read more &gt;</span>
        </a>
      </article>
    </section>
  {/if}
{/each}

<style lang="postcss">
  article p {
    margin-block-end: 0;
  }

  article a span {
    font-size: 1rem;
  }
</style>
