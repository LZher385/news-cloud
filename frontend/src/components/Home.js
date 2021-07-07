import React from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";

import QueriesForm from "./QueriesForm";
import KeywordData from "./KeywordData";
import WordCloud from "./WordCloud";
import ErrorPopup from "./ErrorPopup";
import useStyles from "../styles";

const Home = () => {
  const classes = useStyles();

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
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    generateCloud();
  }, []);

  const generateCloud = () => {
    setShowCloud(false);
    axios
      .get(
        `http://localhost:3001/generate?category=${queries.current.category}&country=${queries.current.country}&keywords=${queries.current.keywords}`
      )
      .then((res) => {
        const { countArr } = res.data; //wordmap not needed at all?
        if (countArr.length === 0) {
          setError({ text: "No results!" });
        }
        dataArr.current = countArr;
        setData(
          dataArr.current.map((obj, index) => {
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
      <QueriesForm queries={queries} generateCloud={generateCloud} />
      {error && <ErrorPopup error={error} setError={setError} />}

      {showCloud && <WordCloud keywordClick={keywordClick} data={data} />}
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
