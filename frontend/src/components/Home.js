import React from "react";
import axios from "axios";

import QueriesForm from "./QueriesForm";
import KeywordData from "./KeywordData";
import WordCloud from "./WordCloud";

import { Typography } from "@material-ui/core";

const Home = () => {
  const queries = React.useRef({
    country: "",
    category: "general",
    keywords: "",
  });
  const dataArr = React.useRef(null);
  const [data, setData] = React.useState(null);
  const [keywordObj, setKeywordObj] = React.useState(null);
  const [showKeywordModal, setShowKeywordModal] = React.useState(false);
  const [showCloud, setShowCloud] = React.useState(false);

  React.useEffect(() => {
    generateCloud();
  }, []);

  const generateCloud = () => {
    console.log("queries");
    console.log(queries.current);
    setShowCloud(false);
    axios
      .get(
        `http://localhost:3001/generate?category=${queries.current.category}&country=${queries.current.country}&keywords=${queries.current.keywords}`
      )
      .then((res) => {
        const { countArr } = res.data; //wordmap not needed at all?
        console.log(res.data);
        dataArr.current = countArr;
        console.log(dataArr.current);
        setData(
          dataArr.current.map((obj, index) => {
            // should probably slice in backend to reduce data
            return { value: obj.keyword, count: obj.count, key: `${index}` };
          })
        );
        setShowCloud(true);
      });
  };
  const keywordClick = (tag) => {
    console.log(`'${tag.value}' was selected`);
    console.log(tag.key);
    setKeywordObj(dataArr.current[parseInt(tag.key, 10)]);
    setShowKeywordModal(true);
  };

  return (
    <div>
      {showCloud && <WordCloud keywordClick={keywordClick} data={data} />}
      {showKeywordModal && (
        <KeywordData
          keywordObj={keywordObj}
          showKeywordModal={showKeywordModal}
          setShowKeywordModal={setShowKeywordModal}
        ></KeywordData>
      )}
      <QueriesForm queries={queries} generateCloud={generateCloud} />
    </div>
  );
};

export default Home;
