/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ url }) {
  const allPosts = import.meta.globEager("/src/lib/posts/*.{md,svx,svelte.md}");

  const limit = Number(url.searchParams.get("limit") ?? Infinity);

  if (Number.isNaN(limit)) {
    return {
      status: 400,
    };
  }

  const posts = [];
  for (const path in allPosts) {
    const post = allPosts[path];
    if (post) {
      posts.push({ ...post.metadata });
    }
  }

  const publishedPosts = posts
    .filter((post) => post.published)
    .slice(0, limit)
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  return {
    body: publishedPosts,
  };
}
