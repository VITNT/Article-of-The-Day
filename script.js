var articleTitle = document.querySelector("#article-title");
var articleSource = document.querySelector("#article-source");
var articleInfo = document.querySelector("#article-text");
var url = null;

// fetching wikipedia API for articles
const wikiAPI = "https://en.wikipedia.org/api/rest_v1/page/random/summary";

async function getArticle() {
  const response = await fetch(wikiAPI);
  if (!response.ok) {
    throw new Error("Error: ${response.status}");
  }

  const article = await response.json();
  return article;
}

function renderArticle(article) {
  articleTitle.textContent = article.title;
  articleInfo.textContent = article.extract;
  articleSource.textContent = "Wikipedia";
  url = article.content_urls.desktop.page;
}

async function loadArticle() {
  let article = await getArticle();
  renderArticle(article);
}

loadArticle();
button = document.querySelector("#article-button");
button.addEventListener("click", loadArticle);

// opening article
function openArticle() {
  window.open(url, "_blank");
}
openButton = document.querySelector("#open-article");
openButton.addEventListener("click", openArticle);

// Article date
var date = new Date();
var dateText = document.querySelector("#date");
const dateFormat = {
  month: "short",
  day: "numeric",
  year: "numeric",
};

dateText.textContent = date.toLocaleDateString("en-US", dateFormat);
