/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
  const allPosts = import.meta.globEager("/src/lib/posts/*.{md,svx,svelte.md}");

  let posts = [];
  // Get the posts' slugs
  for (let path in allPosts) {
    const post = allPosts[path];
    const slug = post.metadata.slug;
    const p = { post, slug };
    posts.push(p);
  }

  // Find the post with the slug
  const filteredPost = posts.find((p) => {
    return p.slug.toLowerCase() === params.slug.toLowerCase();
  });

  const html = filteredPost.post.default.render();
  const metadata = filteredPost.post.metadata;
  const post = { ...metadata, ...html };

  // Return prop to page
  return {
    body: { post },
  };
}
