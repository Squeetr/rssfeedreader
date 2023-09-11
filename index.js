import RSSParser from "rss-parser";

const feedUrl = "YOURFEEDHERE";

const parse = async url => {
    const feed = await new RSSParser().parseURL(url);

    console.log(feed.title);
    console.log(feed.updated);

    feed.items.forEach(item => {
        console.log(`${item.title} - ${item.link}\n${item.contentSnippet}\n\n`);
        // Simplified version that only shows title and date. console.log(`${item.title} - ${item.published}\n`);
    });
};

console.log("Parsing " + feedUrl);

parse(feedUrl);
