module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('home', 'layouts/home.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/css');
  return {
    dir: { input: 'src', output: 'docs', includes: '_includes', data: '_data' },
  };
};
