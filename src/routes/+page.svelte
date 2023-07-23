<script>
  import webpSrcset from "$lib/assets/rory-headshot.png?width=360;760&format=webp&as=srcset"
  import pngSrcset from "$lib/assets/rory-headshot.png?width=360;760&as=srcset"

  let sizes = "(min-width: 720px) 50vw, 100vw"
</script>

<svelte:head>
  <title>Rory Web Dev</title>
  <link rel="preload" as="image" imagesrcset={webpSrcset} />
  <link rel="preload" as="image" imagesrcset={pngSrcset} />
</svelte:head>

<h1>Welcome</h1>

<section>
  <div class="section-bio">
    <div class="blob">
      <picture>
        <source
          width="764"
          height="892"
          srcset={webpSrcset}
          type="image/webp"
          {sizes} />
        <img
          class="bg-image"
          alt="Headshot of Rory"
          width="764"
          height="892"
          srcset={pngSrcset}
          {sizes}
          decoding="async"
          loading="eager" />
      </picture>
    </div>
    <picture class="fg-picture">
      <source
        width="764"
        height="892"
        srcset={webpSrcset}
        type="image/webp"
        {sizes} />
      <img
        class="fg-image"
        alt="Headshot of Rory"
        width="764"
        height="892"
        srcset={pngSrcset}
        {sizes}
        decoding="async"
        loading="eager" />
    </picture>
  </div>
  <div class="content">
    <p>
      Hello, my name is Rory. I learn, live, and love web development. I geek
      out over the details. I build projects with experience and best practices
      in my toolbelt.
    </p>
    <a href="/contact" class="button">Get in touch</a>
  </div>
</section>
<section class="section-work">
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
    <a href="/work" class="button">See my work</a>
  </div>
</section>
<section class="section-blog">
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
    <a href="/blog" class="button">Have a read</a>
  </div>
</section>

<style lang="postcss">
  section {
    min-height: var(--size-15);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    place-content: center;
    place-items: center stretch;
    gap: var(--size-9);
  }

  .section-work {
    grid-template-columns: 2fr 3fr;
  }

  .section-blog {
    grid-template-columns: 3fr 2fr;
  }

  p {
    margin-block-end: var(--size-7);
  }

  .col-start-2 {
    grid-column: 2;
  }

  .content {
    grid-row: 1;
  }

  .section-bio {
    --top-offset: 2.5rem;
    display: grid;

    & .blob {
      grid-area: 1 / 1;
      margin-block-start: var(--top-offset);
      background-color: var(--surface2);
      border-radius: var(--radius-blob-4);
      overflow: hidden;
    }

    & .fg-picture {
      grid-area: 1 / 1;
    }

    & .bg-image {
      height: calc(var(--top-offset) + 100%);
      margin-block-start: calc(var(--top-offset) * -1);
      object-fit: cover;
    }

    & .fg-image {
      height: 100%;
      clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
      object-fit: cover;
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
    .section-bio,
    .icon-image {
      grid-column: 1 / span 2;
    }

    .section-bio,
    .icon-image {
      margin-left: 10%;
      margin-right: 10%;
    }

    .content {
      grid-row: 2;
    }
  }
</style>
