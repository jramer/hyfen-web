module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter('split', (value, separator) => String(value).split(separator));
  eleventyConfig.addLayoutAlias('home', 'layouts/home.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy({ 'src/apps/assets': 'apps/assets' });
  return {
    dir: { input: 'src', output: 'docs', includes: '_includes', data: '_data' },
  };
};
