let articleTitle = document.querySelector("#article-title");
let articleSource = document.querySelector("#article-source");
let articleInfo = document.querySelector("#article-text");
let articleUrl = null;
let sourceUrl = null;

// fetching backend for articles
async function getArticle() {
  const categories = [];
  const buttons = document.querySelectorAll("#category-selector .active");
  buttons.forEach((button) => {
    categories.push(button.dataset.category);
  });

  const response = await fetch(
    `/api/article?categories=${categories.join(",")}`,
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const article = await response.json();
  return article;
}

function renderArticle(article) {
  articleTitle.textContent = article.title;
  articleInfo.textContent = article.text;
  articleSource.textContent = article.source + " -";
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
let openButton = document.querySelector("#open-article");
openButton.addEventListener("click", openArticle);
function openArticle() {
  window.open(articleUrl, "_blank");
}

// open source
let openSourceButton = document.querySelector("#open-source");
openSourceButton.addEventListener("click", openSource);
function openSource() {
  window.open(sourceUrl, "_blank");
}

// Article date
function showDate() {
  let date = new Date();
  let dateText = document.querySelector("#date");
  const dateFormat = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  dateText.textContent = date.toLocaleDateString("en-US", dateFormat);
}
showDate();

// Selecting categories
let openOptions = document.querySelector("#open-options");
let options = document.querySelector("#options");
let categoryButtons = document.querySelectorAll("#category-selector button");

options.style.display = "none";

openOptions.addEventListener("click", showOptions);
function showOptions() {
  if (openOptions.textContent === "Hide Options") {
    options.style.display = "none";
    openOptions.textContent = "Not Satisfied?";
  } else {
    options.style.display = "flex";
    openOptions.textContent = "Hide Options";
  }
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let allButton = document.querySelector('[data-category="all"]');
    if (button === allButton) {
      categoryButtons.forEach((button) => button.classList.remove("active"));
      allButton.classList.add("active");
    } else {
      // toggle instead of add so I can remove .active class when I click again
      button.classList.toggle("active");
      allButton.classList.remove("active");
      if (!document.querySelector("#category-selector .active")) {
        allButton.classList.add("active");
      }
    }
  });
});
