module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/myStyle.css");
    eleventyConfig.addPassthroughCopy("./src/css/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/admin");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "public",
            templateFormats: ["njk", "html", "md",] 
        }
    }
};
