import christykernsimage from "$lib/assets/christykerns.com_mock.png?width=500;1200&format=webp;png&srcset";
import spacebarimage from "$lib/assets/spacebaragency.com_seo-audit_mock.png?width=500;1200&format=webp;png&srcset";
import qotoimage from "$lib/assets/qoto.com_mock.png?width=500;1200&format=webp;png&srcset";

export const projects = [
  {
    site: "christykerns.com",
    client: "Design Agency",
    service: "WordPress Development",
    notes:
      "This was a completely custom build from scratch. Which is why WordPress was a good fit because it is so flexible. The design was very unique and required attention to detail and implementing different features: overlapping elements, layout changes based on device size, typography effects, scroll-based animations.",
    image: christykernsimage,
  },
  {
    site: "spacebaragency.com",
    client: "SEO Agency",
    service: "Web App Development",
    notes:
      "The need in this project was to pull out very specific details of each user's own website, in order to show areas they could easily improve basic SEO best practices. I was able to use serverless technology and client-side code to build the app on top of a Squarespace website to extend the capabilities of the platform and enrich the user experience.",
    image: spacebarimage,
  },
  {
    site: "qoto.com",
    client: "eCommerce Startup",
    service: "Shopify Development",
    notes:
      "A startup that needed a storefront for their high volume business, that would be capable of showcasing many products for online shoppers. I integrated their brand into a customized theme build, with features such as: an automatic carousel, rotating announcement banner, background video banner, and featured card design.",
    image: qotoimage,
  },
];
