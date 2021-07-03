const express = require("express");
const app = express();
var cors = require("cors");
const port = 3001;

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(""); // key in ur fackin api
var WordPOS = require("wordpos"),
  wordpos = new WordPOS();
const stopwords = require("./stopwords");

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  console.log("Hello world");
});

app.get("/generate", (req, res) => {
  const { category, country, keyword } = req.query;
  wordpos = new WordPOS({ stopwords });

  let re = /( - [A-Z])|( \| [A-Z])|( - [0-9])|( \| [0-9])/g;
  let wordmap = new Map();
  let countArr = [];
  newsapi.v2
    .topHeadlines({
      category: category,
      language: "en",
      pageSize: 100,
      ...(country && { country: country }),
      ...(keyword && { q: keyword }),
    })
    .then((response) => {
      const { articles } = response;
      Promise.all(
        articles.map(async (article) => {
          const { url, title: originalTitle, urlToImage } = article;
          const description = article.description || "No description available";
          let { title } = article;
          const indMatch = title.search(re);
          title = indMatch != -1 ? title.substring(0, indMatch) : title;
          await wordpos.getPOS(title, function (result) {
            const combinedArray = [...result.nouns, ...result.rest];
            combinedArray.map((keyword) => {
              const lowerCaseWord = keyword.toLowerCase();
              if (!wordmap.has(lowerCaseWord)) {
                wordmap.set(lowerCaseWord, countArr.length);
                countArr.push({
                  keyword: lowerCaseWord,
                  count: 1,
                  urls: [url],
                  titles: [originalTitle],
                  descriptions: [description],
                  urlToImages: [urlToImage],
                });
              } else {
                const prevIndex = wordmap.get(lowerCaseWord);
                const prevWordObj = countArr[prevIndex];
                countArr[prevIndex] = {
                  ...prevWordObj,
                  urls: [...prevWordObj.urls, url],
                  titles: [...prevWordObj.titles, originalTitle],
                  descriptions: [...prevWordObj.descriptions, description],
                  urlToImages: [...prevWordObj.urlToImages, urlToImage],
                  count: prevWordObj.count + 1,
                };
              }
            });
          });
        })
      ).then((x) => {
        countArr.sort((first, second) => second.count - first.count);
        res.json({ wordmap: [...wordmap], countArr });
      });
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
