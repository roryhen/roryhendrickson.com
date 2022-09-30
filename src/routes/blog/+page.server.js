import { error } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').PageLoad} */
export function load({ url }) {
  const allPosts = import.meta.glob("../../lib/posts/*.{md,svx,svelte.md}", {
    eager: true,
  });

  const limit = Number(url.searchParams.get("limit") ?? Infinity);

  if (Number.isNaN(limit)) {
    throw error(400, "Parsing error");
  }

  const foundPosts = [];
  for (const path in allPosts) {
    const post = allPosts[path];
    if (post) {
      foundPosts.push({ ...post.metadata });
    }
  }

  const posts = foundPosts
    .filter((post) => post.published)
    .slice(0, limit)
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  if (posts && posts.length > 0) {
    return { posts };
  }

  throw error(404, "Not found");
}
