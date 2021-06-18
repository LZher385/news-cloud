var WordPOS = require('wordpos'),
wordpos = new WordPOS();
const data = require('../top-headlines.json')


const {articles} = data;
let re = /( - [A-Z])|( \| [A-Z])|( - [0-9])|( \| [0-9])/g
let wordmap = new Map()
WordPOS.stopwords.push('honduras');
console.log('GSGSGGSFDFSFDSFSFDFSDF');
console.log(WordPOS.stopwords[WordPOS.stopwords.length - 1]);
//{{title,url},{title,url}...}
articles.map((article) => {
    const {url, title: originalTitle} = article;
    let {title} = article;
    const indMatch = title.search(re);
    title = indMatch != -1 ? title.substring(0, indMatch) : title;
    wordpos.getNouns(title, function(result) {
        result.map((keyword)=>{
        const word = keyword.toLowerCase();
        console.log(title);
        console.log(word);
        console.log('--------');
        if (!wordmap.has(word)) {
            wordmap.set(word, {count:1, urls:[url], keyword:word});
        } else {
            const prev = wordmap.get(word);
            wordmap.set(word, {count:prev.count+1, urls:[url, ...prev.urls], keyword:word});
        }})
    })
    // wordpos.getPOS(title, function(result) {
    //     const {nouns, verbs, rest} = result;
    //     const arr = [...rest];
    //     nouns
    //     .filter(noun => !verbs.includes(noun))
    //     .map((keyword)=>{
    //         arr.push(keyword)
    //         const word = keyword.toLowerCase();
    //         if (!wordmap.has(word)) {
    //             wordmap.set(word, {count:1, urls:[url], titles:[originalTitle], keyword:word});
    //         } else {
    //             const prev = wordmap.get(word);
    //             wordmap.set(word, {count:prev.count+1, urls:[...prev.urls, url], titles:[...prev.titles, originalTitle], keyword:word});
    //         }})
    //         console.log(title);
    //         console.log('rest');
    //         console.log(rest);
    //         console.log('nouns');
    //         console.log(nouns);
    //         console.log('final');
    //         console.log(arr);
    //         console.log('------------');
    // })
})
// setTimeout(() => {
//     console.log(wordmap);
// }, 200);

module.exports = {wordmap};
