var articleTitle = document.querySelector("#article-title");
var articleSource = document.querySelector("#article-source");
var articleInfo = document.querySelector("#article-text");
var articleUrl = null;
var sourceUrl = null;

// fetching backend API for articles
async function getArticle() {
  const category = document.querySelector("#category-selector").value;
  const response = await fetch("/api/article");

  if (!response.ok) {
    throw new Error("Error: ${response.status}");
  }

  const article = await response.json();
  return article;
}

function renderArticle(article) {
  articleTitle.textContent = article.title;
  articleInfo.textContent = article.text;
  articleSource.textContent = article.source;
  articleUrl = article.url;
  sourceUrl = article.sourceUrl;
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
  window.open(articleUrl, "_blank");
}

var openButton = document.querySelector("#open-article");
openButton.addEventListener("click", openArticle);

// open source
function openSource() {
  window.open(sourceUrl, "_blank");
}

var openSourceButton = document.querySelector("#open-source");
openSourceButton.addEventListener("click", openSource);

// Article date
function showDate() {
  var date = new Date();
  var dateText = document.querySelector("#date");
  const dateFormat = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  dateText.textContent = date.toLocaleDateString("en-US", dateFormat);
}
showDate();

// Selecting categories
var activeSource = document.querySelector(".active");

var openOptions = document.querySelector("#open-options");
openOptions.addEventListener("click", showOptions);

function showOptions() {}
