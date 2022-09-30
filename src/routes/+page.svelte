<!-- src/routes/+page.svelte -->
<script>
  import headshot from "$lib/assets/rory-headshot.png?width=360;760&format=webp;avif;png&srcset";
</script>

<svelte:head>
  <title>Rory Web Dev</title>
  <link rel="preload" as="image" imagesrcset="{headshot}" />
</svelte:head>

<h1>Welcome</h1>

<section>
  <div class="featured-image col-start-2">
    <div class="blob">
      <img
        srcset="{headshot}"
        alt="Headshot of Rory"
        decoding="async"
        width="764"
        height="892" />
    </div>
    <img
      srcset="{headshot}"
      alt="Headshot of Rory"
      decoding="async"
      width="764"
      height="892" />
  </div>
  <div class="content">
    <p>
      Hello, my name is Rory. I learn, live, and love web development. I geek
      out over the details. I build projects with experience and best practices
      in my toolbelt.
    </p>
    <a data-sveltekit-prefetch href="/contact" class="button">Get in touch</a>
  </div>
</section>
<section class="grid-col-two-three">
  <div class="icon-image work">
    <svg viewBox="0 0 32 32" width="100" height="100">
      <use href="/app-developer.svg#icon" />
    </svg>
  </div>
  <div class="content col-start-2">
    <p>
      Need some bugs fixed? Have an eCommerce website? Want to integrate a third
      party app with your current setup? I can help with that.
    </p>
    <a data-sveltekit-prefetch href="/work" class="button">See my work</a>
  </div>
</section>
<section class="grid-col-three-two">
  <div class="icon-image blog">
    <svg viewBox="0 0 32 32" width="100" height="100">
      <use href="/build.svg#icon" />
    </svg>
  </div>
  <div class="content">
    <p>
      I don't have room in my head for the various solutions and concepts I've
      learned while tooling around with tech, so I've documented some of it.
    </p>
    <a data-sveltekit-prefetch href="/blog" class="button">Have a read</a>
  </div>
</section>

<style lang="postcss">
  section {
    min-height: 50vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-content: center;
    place-items: center stretch;
    gap: 4rem;
  }

  .grid-col-two-three {
    grid-template-columns: 2fr 3fr;
  }

  .grid-col-three-two {
    grid-template-columns: 3fr 2fr;
  }

  p {
    margin-block-end: 2rem;
  }

  .col-start-2 {
    grid-column: 2;
  }

  .content {
    grid-row: 1;
  }

  .featured-image {
    --top-offset: 2.5rem;
    position: relative;

    & .blob {
      margin-block-start: var(--top-offset);
      background-color: var(--surface2);
      border-radius: var(--radius-blob-4);
      overflow: hidden;
    }

    & .blob img {
      margin-block-start: calc(var(--top-offset) * -1);
      vertical-align: bottom;
      object-fit: cover;
    }

    & > img {
      position: absolute;
      top: 0;
      clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    }
  }

  .icon-image {
    background-color: var(--surface2);
    aspect-ratio: 1;

    & > svg {
      stroke: none;
      fill: var(--text2);
      width: 40%;
      height: auto;
      position: relative;
      top: 50%;
      left: 50%;
    }
  }

  .work {
    border-radius: var(--radius-blob-5);

    & svg {
      transform: translate(-60%, -60%);
    }
  }

  .blog {
    border-radius: var(--radius-blob-3);

    & svg {
      transform: translate(-40%, -40%);
    }
  }

  @media (--sm-vw) {
    .content,
    .featured-image,
    .icon-image {
      grid-column: 1 / span 2;
    }

    .featured-image,
    .icon-image {
      margin-left: 10%;
      margin-right: 10%;
    }

    .content {
      grid-row: 2;
    }
  }
</style>
