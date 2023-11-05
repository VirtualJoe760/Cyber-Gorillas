module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/myStyle.css");
    eleventyConfig.addPassthroughCopy("./src/css/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/js");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};
