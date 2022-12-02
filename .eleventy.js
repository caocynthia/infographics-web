module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./source/images/");
  eleventyConfig.addPassthroughCopy("./source/styles/");
  eleventyConfig.addPassthroughCopy("./source/scripts/");

  // this is where the collections are defined
  eleventyConfig.addCollection("internet", function (collectionApi) {
    return collectionApi.getFilteredByGlob("**/internet/**/*");
  });
  eleventyConfig.addCollection("media", function (collectionApi) {
    return collectionApi.getFilteredByGlob("**/media/**/*");
  });
  eleventyConfig.addCollection("entertainment", function (collectionApi) {
    return collectionApi.getFilteredByGlob("**/entertainment/**/*");
  });
  eleventyConfig.addCollection("fashion", function (collectionApi) {
    return collectionApi.getFilteredByGlob("**/money/**/*");
  });
  eleventyConfig.addCollection("food", function (collectionApi) {
    return collectionApi.getFilteredByGlob("**/food/**/*");
  });
  eleventyConfig.addCollection("drugs", function (collectionApi) {
    return collectionApi.getFilteredByGlob("**/drugs/**/*");
  });

  // all posts collection
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("**/infographics/**/*");
  });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "source",
      output: "build",
      includes: "_partials",
      layouts: "_layouts",
      data: "_data",
    },
  };
};
