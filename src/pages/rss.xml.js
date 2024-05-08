import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";
const posts = await getCollection("posts");

export async function GET(context) {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
