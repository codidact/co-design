// This escapes the HTML inside the example code block
function escapeHtml(unsafe) {
  return unsafe
       .replace(/\<br\>/g, "\n")
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
}

const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
  eleventyConfig.addLayoutAlias('playground', 'layouts/playground.html');

  // When the linked css or javascript changes and we are in dev mode, update in the browser
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

  // Make sure to either copy (or passthrough from original location for dev server) needed files
  eleventyConfig.addPassthroughCopy("assets/**/*");
  eleventyConfig.addPassthroughCopy("dist/**/*");
  eleventyConfig.addPassthroughCopy("js/**/*.js");

  eleventyConfig.addPairedShortcode("example", function (content, id, application_notice, further_preview_class) {
    content = content.trim();
    if (application_notice) {
      return `<h5 id="example-${id}">Example</h5><div class="d-example"><pre class="d-example-code"><code>${escapeHtml(content)}</code></pre><div class="d-example-preview ${further_preview_class}">${content}<p><span class="has-color-tertiary-600 has-font-size-caption has-font-style-italic">${application_notice}</span></p></div></div>`;
    }
    return `<h5 id="example-${id}">Example</h5><div class="d-example"><pre class="d-example-code"><code>${escapeHtml(content)}</code></pre><div class="d-example-preview ${further_preview_class}">${content}</div></div>`;
  });

  eleventyConfig.addPairedShortcode("notice", function (content, title) {
    content = content.trim();
    return `<div class="notice is-warning"><h4>${title}</h4><p>${content}</div>`;
  });
  
  return {
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "",
    dir: {
      input: "docs_src",
      output: "docs"
    },
  };
};