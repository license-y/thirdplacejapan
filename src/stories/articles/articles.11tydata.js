export default {
  layout: "article.njk",
  tags: ["articles"],
  eleventyComputed: {
    permalink: (data) => {
      const cat = data.category_slug || "about";
      return `/stories/${cat}/${data.page.fileSlug}/`;
    },
  },
};
