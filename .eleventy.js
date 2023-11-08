module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/myStyle.css");
    eleventyConfig.addPassthroughCopy("./src/css/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/admin");

    eleventyConfig.addCollection("keyedPosts", function(collectionApi) {
        let keyMap = {};
        collectionApi.getAll().forEach(function(item) {
            let keys = item.data.key; // assuming key is a string or an array of strings
            if (typeof keys === 'string') {
                keys = [keys];
            }

            if (!keys) return;

            keys.forEach(function(key) {
                if (!keyMap[key]) {
                    keyMap[key] = [];
                }
                keyMap[key].push(item);
            });
        });
        return keyMap;
    });


    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "public",
            templateFormats: ["njk", "html", "md",] 
        }
    }
};
