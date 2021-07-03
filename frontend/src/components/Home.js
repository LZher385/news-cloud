import React from "react";
import axios from "axios";

import QueriesForm from "./QueriesForm";
import KeywordData from "./KeywordData";
import { TagCloud } from "react-tagcloud";

const Home = () => {
  const [queries, setQueries] = React.useState({
    country: "",
    category: "general",
    keyword: "",
  });
  const [countArr, setCountArr] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [keywordObj, setKeywordObj] = React.useState(null);
  const [showKeywordModal, setShowKeywordModal] = React.useState(false);

  const generateCloud = () => {
    //console.log(queries);
    axios
      .get(
        `http://localhost:3001/generate?category=${queries.category}&country=${queries.country}&keyword=${queries.keyword}`
      )
      .then((res) => {
        const { countArr } = res.data; //wordmap not needed at all?
        setCountArr(countArr);
        setData(
          countArr.slice(0, 50).map((obj, index) => {
            // should probably slice in backend to reduce data
            return { value: obj.keyword, count: obj.count, key: index };
          })
        );
      });
  };
  const keywordClick = (tag) => {
    console.log(`'${tag.value}' was selected`);
    setKeywordObj(countArr[parseInt(tag.key, 10)]);
    setShowKeywordModal(true);
  };

  return (
    <div>
      <h1>News cloud</h1>
      <QueriesForm setQueries={setQueries} queries={queries} />
      <button type="button" onClick={generateCloud}>
        Generate News Cloud
      </button>
      {data && (
        <TagCloud
          minSize={12}
          maxSize={35}
          tags={data}
          onClick={keywordClick}
        ></TagCloud>
      )}
      {showKeywordModal && (
        <KeywordData
          keywordObj={keywordObj}
          showKeywordModal={showKeywordModal}
          setShowKeywordModal={setShowKeywordModal}
        ></KeywordData>
      )}
    </div>
  );
};

export default Home;
