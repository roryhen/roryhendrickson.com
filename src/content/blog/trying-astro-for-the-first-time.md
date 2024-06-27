---
title: Trying Astro for the first time
slug: trying-astro-for-the-first-time
description: Building a side project with new tech on my free time.
author: Rory Hendrickson
date: 2023-3-2
tags:
  - astro
  - development
  - learning
published: true
---
I work on a Next.js site for my day job, so I’m lucky that I get to work with pretty modern tech. But something that keeps me excited about frontend development is all the new technologies and approaches that the community keeps coming up with, so I decided to try out the JavaScript app framework Astro to build a little demo project.

The getting started experience to me was quite smooth. They have great docs, and they have this nice cli utility to `astro add` the JS framework of your choice and some common integrations like Tailwind or MDX.

At this point, I’ve had experience with both Next.js and SvelteKit, which have a lot of features in common with Astro, like file-based routes, SSR, data fetching patterns, etc. So to me the real differentiator of Astro is its component authoring experience.

Some of the features that I really like about Astro components:

- Authoring in single-file components (SFC) to colocate related code
- A JSX-like syntax so I can re-use what I know
- Fences (`---`) to delineate server-side javascript and the template

This project didn't have much interaction so I stuck with stock Astro components. It felt really easy to author in, and I didn't feel like I was fighting the framework or the mental model. Overall I'm happy with the experience and I can't wait to try it again.

The Astro Team also recently released 2.0. One of the bigger highlighted features Content Collections, which comes with comprehensive type-safety for your markdown files, which now has me tempted to move my site over to Astro.


