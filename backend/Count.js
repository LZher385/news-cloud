const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('534d871bcef144f6b602c1d22327cd33'); // key in ur fackin api
var WordPOS = require('wordpos'),
wordpos = new WordPOS();
const stopwords = require('./stopwords')

wordpos = new WordPOS({stopwords});

let re = /( - [A-Z])|( \| [A-Z])|( - [0-9])|( \| [0-9])/g
let wordmap = new Map()
let countArr = [];
newsapi.v2.topHeadlines({
    category: 'general',
    language: 'en',
    pageSize: 100,
}).then(response => {
    const {articles} = response;
    Promise.all(articles.map(async (article) => {
        const {url, title: originalTitle} = article;
        let {title} = article;
        const indMatch = title.search(re);
        title = indMatch != -1 ? title.substring(0, indMatch) : title;
        await wordpos.getPOS(title, function(result) {
            const combinedArray = [...result.nouns, ...result.rest];
            combinedArray.map((keyword)=>{
            const lowerCaseWord = keyword.toLowerCase();
            if (!wordmap.has(lowerCaseWord)) {
                wordmap.set(lowerCaseWord, countArr.length);
                countArr.push({keyword: lowerCaseWord, count: 1, urls: [url], titles: [originalTitle]});
            } else {
                const prevIndex = wordmap.get(lowerCaseWord);
                const prevWordObj = countArr[prevIndex];
                countArr[prevIndex] = {...prevWordObj, urls:[...prevWordObj.urls, url], titles: [...prevWordObj.titles, originalTitle], count: prevWordObj.count + 1};
            }})
        })
    })).then(x => {
        countArr.sort((first, second) => first.count - second.count)
        for (let x = 1; x < 10; x++) {
            console.log(countArr[countArr.length - x]);
        }
    })
})
// TODO: sort out common stopwords (numbers, months etc)

module.exports = {wordmap};
