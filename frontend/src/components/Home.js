import React from "react";
import axios from "axios";

import QueriesForm from "./QueriesForm";
import WordCloud from "./WordCloud";
import KeywordData from "./KeywordData";
import { TagCloud } from "react-tagcloud";

const Home = () => {
  const [queries, setQueries] = React.useState({ country: '', category: 'general', keyword: '' });
  const [countArr, setCountArr] = React.useState(null);
  const [data, setData] = React.useState(null);

  const generateCloud = () => {
    //console.log(queries);
    axios
      .get(`http://localhost:3001/generate?category=${queries.category}&country=${queries.country}&keyword=${queries.keyword}`)
      .then(res => {
        const { countArr } = res.data; //wordmap not needed at all?
        setCountArr(countArr);
        console.log('data set')
        setData(countArr.slice(0, 50).map((obj, index) => { // should probably slice in backend to reduce data
          return { value: obj.keyword, count: obj.count, key: index };
        }))
      })
  }
  const keywordClick = tag => {
    console.log(`'${tag.value}' was selected`)
    console.log(`first url: ${countArr[parseInt(tag.key)].urls[0]}`)
  }
  return (
    <div>
      <h1>News cloud</h1>
      <QueriesForm setQueries = { setQueries } queries = {queries}/>
      <button type='button' onClick={generateCloud}>
        Generate News Cloud
      </button>
      { data && <TagCloud minSize = {12} maxSize = {35} tags = {data} onClick = {keywordClick}>
      </TagCloud> }
    </div>
  );
};

export default Home;
