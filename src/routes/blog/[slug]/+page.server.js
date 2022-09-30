/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const allPosts = import.meta.glob("../../../lib/posts/*.{md,svx,svelte.md}", {
    eager: true,
  });

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
  return { post };
}
