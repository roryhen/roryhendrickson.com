<!-- src/routes/blog/index.svelte -->
<script context="module">
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
  import Section from "$lib/Section.svelte";

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
    <Section --section-padding="5rem 0" --section-alignment="center start">
      <article>
        <a sveltekit:prefetch href="/blog/{post.slug}">
          <h2>{post.title}</h2>
        </a>
        <Time date={post.date} />
        <p>{post.description}</p>
      </article>
    </Section>
  {/if}
{/each}

<style lang="postcss">
</style>
