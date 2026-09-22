var articleTitle = document.querySelector("#article-title");
var articleSource = document.querySelector("#article-source");
var articleInfo = document.querySelector("#article-text");

const wikiAPI = "https://en.wikipedia.org/api/rest_v1/page/random/summary";

async function getArticle() {
  for (let i = 0; i < 5; i++) {
    const response = await fetch(wikiAPI);
    if (!response.ok) {
      throw new Error("Error: ${response.status}");
    }

    const article = await response.json();
    return article;
  }
}

function renderArticle(article) {
  articleTitle.textContent = article.title;
  articleInfo.textContent = article.extract;
  articleSource.textContent = "Wikipedia";
}

async function loadArticle() {
  let article = await getArticle();
  renderArticle(article);
}

loadArticle();
