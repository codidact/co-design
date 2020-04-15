module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
  
  return {
    dir: {
      input: "docs_src",
      output: "docs"
    },
  };
};