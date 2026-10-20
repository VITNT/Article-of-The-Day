<div align="center">

# Article of The Day

[AOTD](https://article.visott.com)

![Site Image](./images/demo-img.png)

[![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](#)
[![CSS](https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)

</div>

---

AOTD is a random article generator. It utilizes RSS Feeds to select an article each day. But, if you don't like the article you get, you can always re-roll! Read one article a day. Improve your reading skills!

AOTD is inspired by other daily sites like Word of the Day.

## Features

- Randomly Generate an Article
- Open Article Link
- Open Source Link
- Topic Selectors (General, Tech, Sports...)

## Tech Stack

AOTD (Aritcle of the Day) uses vanilla HTML, CSS, and Javascript. It uses the RSS Parser library in Javascript which extracts the title and description of articles from different sources.

## Architecture

```
├── README.md
├── api
│   └── article.js
├── images
│   ├── coffee-bean.png
│   ├── demo-img.png
│   ├── favicon.png
│   └── github-logo.png
├── index.html
├── package-lock.json
├── package.json
├── script.js
└── styles.css
```

## Getting Started

1. Clone the demo: `git clone https://github.com/VITNT/Article-of-The-Day.git`
2. Install rss-parser and other dependencies: `npm install`
3. Start the local dev server: `npx vercel dev`
4. Open the website at `http://localhost:3000`

AOTD is hosted using vercel.

## Demo

[Click Here](https://article.visott.com)
