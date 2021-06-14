var WordPOS = require('wordpos'),
wordpos = new WordPOS();
const data = require('../../top-headlines.json')


const {articles} = data;
let wordmap = new Map()
//{{title,url},{title,url}...}
articles.map((article) => {
    const {title,url} = article;
    wordpos.getNouns(title).map((keyword)=>{
        const word=keyword.toLowerCase();
        if (!wordmap.has(word)) {
            wordmap.set(word,{count:1,urls:[url],keyword:word});
        } else {
            const prev = wordmap.get(word);
            wordmap.set(word,{count:prev.count+1,urls:[url,...prev.urls],keyword:word});
        }
        return 0;
    })
    return 0;
})
module.exports={wordmap};
