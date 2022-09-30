/** @type {import('./$types').LayoutLoad} */
export function load({ url }) {
  return {
    key: url.pathname,
  };
}
