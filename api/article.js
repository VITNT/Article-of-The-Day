// rss feeds for random articles
import Parser from "rss-parser";

const parser = new Parser({
  timeout: 8000,
});

const sources = [
  {
    name: "ESPN",
    url: "https://www.espn.com/espn/rss/news",
  },
  {
    name: "BBC News",
    url: "https://feeds.bbci.co.uk/news/rss.xml",
  },
  {
    name: "MIT Technology Review",
    url: "https://www.technologyreview.com/feed/",
  },
  {
    name: "The Verge",
    url: "https://www.theverge.com/rss/index.xml",
  },
  {
    name: "Science Daily",
    url: "https://www.sciencedaily.com/rss/top/science.xml",
  },
  {
    name: "Smithsonian Magazine",
    url: "https://www.smithsonianmag.com/rss/latest_articles/",
  },
  {
    name: "Scientific American",
    url: "https://www.scientificamerican.com/feed/",
  },
  {
    name: "The Guardian",
    url: "https://www.theguardian.com/international/rss",
  },
  {
    name: "Wired",
    url: "https://www.wired.com/feed/category/science/latest/rss",
  },
];
