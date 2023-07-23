import coffeedoseWebp from "$lib/assets/coffeedose.cafe_mock.png?width=480;640;800;1200;1600&format=webp&as=srcset"
import coffeedosePng from "$lib/assets/coffeedose.cafe_mock.png?width=480;640;800;1200;1600&format=webp&as=srcset"
import spacebarWebp from "$lib/assets/spacebaragency.com_seo-audit_mock.png?width=480;640;800;1200;1600&format=webp&as=srcset"
import spacebarPng from "$lib/assets/spacebaragency.com_seo-audit_mock.png?width=480;640;800;1200;1600&format=webp&as=srcset"
import christykernsWebp from "$lib/assets/christykerns.com_mock.png?width=480;640;800;1200;1600&format=webp&as=srcset"
import christykernsPng from "$lib/assets/christykerns.com_mock.png?width=480;640;800;1200;1600&as=srcset"
import iconbrowserWebp from "$lib/assets/icon-browser_mock.png?width=480;640;800;1200;1600&format=webp&as=srcset"
import iconbrowserPng from "$lib/assets/icon-browser_mock.png?width=480;640;800;1200;1600&format=webp&as=srcset"

export const projects = [
  {
    site: "coffeedose.cafe",
    client: "Coffee Shop",
    service: "Shopify Development",
    notes:
      "A popular coffee shop with a unique brand and multiple stores needed to build their site on Shopify. They had a thriving eCommerce store with specialized products. With a custom-built theme, I was able to effectively integrate their brand with site features such as a video hero section, newsletter modal with configurable timing, and map embeds",
    image: coffeedoseWebp,
    fallbackImage: coffeedosePng,
  },
  {
    site: "spacebaragency.com",
    client: "SEO Agency",
    service: "Web App Development",
    notes:
      "The need in this project was to pull out very specific details of each user's own website, in order to show areas they could easily improve basic SEO best practices. I was able to use serverless technology and client-side code to build the app on top of a Squarespace website to extend the capabilities of the platform and enrich the user experience.",
    image: spacebarWebp,
    fallbackImage: spacebarPng,
  },
  {
    site: "christykerns.com",
    client: "Design Agency",
    service: "WordPress Development",
    notes:
      "This was a completely custom build from scratch. Which is why WordPress was a good fit because it is so flexible. The design was very unique and required attention to detail and implementing different features: overlapping elements, layout changes based on device size, typography effects, scroll-based animations.",
    image: christykernsWebp,
    fallbackImage: christykernsPng,
  },
  {
    site: "design-flow.io",
    client: "Design Inspiration",
    service: "Web App Development",
    notes:
      "This was a side project for one of my clients. They wanted to build a community resource for designers. They tasked me with building an app to easily filter and choose icons for visitors. I used filtering, theming, pagintion, copy-paste functionality, and cloud storage for hosting icon assets.",
    image: iconbrowserWebp,
    fallbackImage: iconbrowserPng,
  },
]
