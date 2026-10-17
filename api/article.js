// rss feeds for random articles
import Parser from "rss-parser";

const parser = new Parser({
  timeout: 5000,
});

const sources = [
  // general
  {
    name: "BBC News",
    url: "https://feeds.bbci.co.uk/news/rss.xml",
    homepage: "https://www.bbc.com",
    category: "general",
  },
  {
    name: "Reuters",
    url: "https://news.google.com/rss/search?q=when:24h+site:reuters.com",
    homepage: "https://www.reuters.com",
    category: "general",
  },
  {
    name: "The Guardian",
    url: "https://www.theguardian.com/international/rss",
    homepage: "https://www.theguardian.com",
    category: "general",
  },
  {
    name: "Al Jazeera",
    url: "https://www.aljazeera.com/xml/rss/all.xml",
    homepage: "https://www.aljazeera.com",
    category: "general",
  },
  // tech
  {
    name: "MIT Technology Review",
    url: "https://www.technologyreview.com/feed/",
    homepage: "https://www.technologyreview.com",
    category: "tech",
  },
  {
    name: "TechCrunch",
    url: "https://techcrunch.com/feed/",
    homepage: "https://www.techcrunch.com",
    category: "tech",
  },
  {
    name: "Wired",
    url: "https://www.wired.com/feed/category/science/latest/rss",
    homepage: "https://www.wired.com",
    category: "tech",
  },
  // science
  {
    name: "Science Daily",
    url: "https://www.sciencedaily.com/rss/top/science.xml",
    homepage: "https://www.sciencedaily.com",
    category: "science",
  },
  {
    name: "NASA",
    url: "https://www.nasa.gov/news-release/feed",
    homepage: "https://www.nasa.gov",
    category: "science",
  },
  {
    name: "Smithsonian Magazine",
    url: "https://www.smithsonianmag.com/rss/latest_articles/",
    homepage: "https://www.smithsonianmag.com",
    category: "science",
  },
  {
    name: "Scientific American",
    url: "http://rss.sciam.com/ScientificAmerican-Global",
    homepage: "https://www.scientificamerican.com",
    category: "science",
  },
  // sports
  {
    name: "CBS Sports",
    url: "https://www.cbssports.com/rss/headlines/",
    homepage: "https://www.cbssports.com",
    category: "sports",
  },
  {
    name: "ESPN",
    url: "https://www.espn.com/espn/rss/news",
    homepage: "https://www.espn.com",
    category: "sports",
  },
  // economics
  {
    name: "St Louis Fed",
    url: "https://www.stlouisfed.org/rss/page%20resources/publications/blog-entries",
    homepage: "https://www.stlouisfed.org/",
    category: "economics",
  },
  {
    name: "BBC Economy",
    url: "https://feeds.bbci.co.uk/news/business/economy/rss.xml",
    homepage: "https://www.bbc.com",
    category: "economics",
  },
];

function randomArticle(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export async function GET(request) {
  const url = new URL(request.url);
  const categoryText = url.searchParams.get("categories") || "all";
  const categories = categoryText.split(",");

  let availableSources = sources.filter((source) => {
    return categories.includes("all") || categories.includes(source.category);
  });

  while (availableSources.length > 0) {
    let source = randomArticle(availableSources);

    try {
      let feed = await parser.parseURL(source.url);

      let articles = feed.items.filter((article) => {
        return article.title && article.link;
      });

      let article = randomArticle(articles);

      return Response.json({
        title: article.title,
        // description
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
      console.log("Error");
    }
  }
}
