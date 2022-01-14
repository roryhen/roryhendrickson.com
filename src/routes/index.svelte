<!-- src/routes/index.svelte -->
<script>
  import headshot from "$lib/assets/rory-headshot.png?width=800&format=png";
</script>

<svelte:head>
  <title>Rory Web Dev</title>
</svelte:head>

<h1>Welcome</h1>

<div>
  <section>
    <div
      class="featured-image col-start-2"
      style="background-image: url({headshot})">
      <img
        src={headshot}
        alt="Headshot of Rory"
        decoding="async"
        width="764"
        height="892" />
    </div>
    <div class="content">
      <p>
        Hello, my name is Rory. I learn, live, and love web development. I geek
        out over the details. I build projects with experience and best
        practices in my toolbelt.
      </p>
      <a sveltekit:prefetch href="/contact" class="button">Get in touch</a>
    </div>
  </section>
  <section class="grid-col-one-two">
    <div class="icon-image work">
      <svg viewBox="0 0 32 32" width="150" height="150"
        ><use href="/app-developer.svg#icon" /></svg>
    </div>
    <div class="content col-start-2">
      <p>
        Need some bugs fixed? Have an eCommerce website? Want to integrate a
        third party app with your current setup? I can help with that.
      </p>
      <a sveltekit:prefetch href="/work" class="button">See my work</a>
    </div>
  </section>
  <section class="grid-col-two-one">
    <div class="icon-image blog">
      <svg viewBox="0 0 32 32" width="150" height="150"
        ><use href="/build.svg#icon" /></svg>
    </div>
    <div class="content">
      <p>
        I don't have room in my head for the various solutions and concepts I've
        learned while tooling around with tech, so I've documented some of it.
      </p>
      <a sveltekit:prefetch href="/blog" class="button">Have a read</a>
    </div>
  </section>
</div>

<style lang="postcss">
  section {
    min-height: 50vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-content: center;
    place-items: center;
    gap: 4rem;

    @media (--sm-vw) {
      grid-column: 1fr;
    }
  }

  .grid-col-one-two {
    grid-template-columns: 1fr 2fr;
  }

  .grid-col-two-one {
    grid-template-columns: 2fr 1fr;
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
    margin-block-start: var(--top-offset);
    background-color: var(--surface2);
    background-size: cover;
    background-position: center calc(var(--top-offset) * -1);
    background-repeat: no-repeat;
    border-radius: var(--radius-blob-4);

    & img {
      margin-block-start: calc(var(--top-offset) * -1);
      vertical-align: bottom;
      object-fit: cover;
      object-position: top;
      clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    }
  }

  .icon-image {
    padding: 6rem;
    background-color: var(--surface2);
    display: grid;
    place-content: center;

    & > svg {
      stroke: none;
      fill: var(--text2);
    }
  }

  .blog {
    border-radius: var(--radius-blob-3);
    padding-inline-start: 8rem;
    padding-block-start: 8rem;
  }

  .work {
    border-radius: var(--radius-blob-5);
    padding-inline-end: 8rem;
    padding-block-end: 8rem;
  }

  @media (--sm-vw) {
    .content,
    .featured-image,
    .icon-image {
      grid-column: 1 / span 2;
    }

    .content {
      grid-row: 2;
    }
  }
</style>
