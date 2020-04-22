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



module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');

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
    dir: {
      input: "docs_src",
      output: "docs"
    },
  };
};