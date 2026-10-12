// rss feeds for random articles
import Parser from "rss-parser";

const parser = new Parser({
  timeout: 5000,
});

const sources = [
  {
    name: "ESPN",
    url: "https://www.espn.com/espn/rss/news",
    homepage: "https://www.espn.com",
    category: "sports",
  },
  {
    name: "BBC News",
    url: "https://feeds.bbci.co.uk/news/rss.xml",
    homepage: "https://www.espn.com",
    category: "sports",
  },
  {
    name: "MIT Technology Review",
    url: "https://www.technologyreview.com/feed/",
    homepage: "https://www.espn.com",
    category: "sports",
  },
  {
    name: "The Verge",
    url: "https://www.theverge.com/rss/index.xml",
    homepage: "https://www.espn.com",
    category: "tech",
  },
  {
    name: "Science Daily",
    url: "https://www.sciencedaily.com/rss/top/science.xml",
    homepage: "https://www.espn.com",
    category: "science",
  },
  {
    name: "Smithsonian Magazine",
    url: "https://www.smithsonianmag.com/rss/latest_articles/",
    homepage: "https://www.espn.com",
    category: "science",
  },
  {
    name: "Scientific American",
    url: "https://www.scientificamerican.com/feed/",
    homepage: "https://www.espn.com",
    category: "science",
  },
  {
    name: "The Guardian",
    url: "https://www.theguardian.com/international/rss",
    homepage: "https://www.espn.com",
    category: "general",
  },
  {
    name: "Wired",
    url: "https://www.wired.com/feed/category/science/latest/rss",
    homepage: "https://www.espn.com",
    category: "tech",
  },
  {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/api/rest_v1/page/random/summary",
    homepage: "https://www.espn.com",
    category: "general",
  },
];

function randomArticle(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export async function GET() {
  let availableSources = [...sources];

  if (category !== "all") {
    availableSources = availableSources.filter(
      (source) => source.category === category,
    );
  }

  while (availableSources.length > 0) {
    var source = randomArticle(availableSources);

    try {
      var feed = await parser.parseURL(source.url);

      var articles = feed.items.filter(
        (article) => article.title && article.link,
      );

      var article = randomArticle(articles);

      return Response.json({
        title: article.title,
        text:
          article.contentSnippet ||
          article.content ||
          article.summary ||
          article.description ||
          "No Description Available.",
        url: article.link,
        source: source.name,
        sourceUrl: source.homepage,
      });
    } catch (error) {
      console.log("error");
    }
  }
}
