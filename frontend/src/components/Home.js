import React from "react";
import axios from "axios";
import { CircularProgress, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typing from "react-typing-animation";
import QueriesForm from "./QueriesForm";
import KeywordData from "./KeywordData";
import WordCloud from "./WordCloud";
import ErrorPopup from "./ErrorPopup";
import useStyles from "../styles";
import Alert from "@material-ui/lab/Alert";

const Home = ({light}) => {
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
  const [cloudSize, setCloudSize] = React.useState(150);

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
        var { countArr } = res.data; //wordmap not needed at all?
        if (countArr.length === 0) {
          setError({ text: "No results!" });
        }
        if (countArr.length >= cloudSize) {
          countArr = countArr.slice(0, cloudSize);
        }
        dataArr.current = countArr;
        setData(
          dataArr.current.map((obj, index) => {
            return {
              props: { className: classes.tag },
              value: obj.keyword,
              count: obj.count,
              key: `${index}`,
            };
          })
        );
        setShowCloud(true);
      });
  };
  const keywordClick = (tag) => {
    setKeywordObj(dataArr.current[parseInt(tag.key, 10)]);
    setShowKeywordModal(true);
  };

  return (
    <div>
      <QueriesForm light={light} queries={queries} generateCloud={generateCloud} />
      <div className={classes.wordCloudOuterContainer}>
        {showCloud ? (
          <WordCloud keywordClick={keywordClick} data={data} />
        ) : (
          <div className={classes.loading}>
            <span
              style={{ fontFamily: "sans-serif", fontSize: 50, color: "white" }}
            >
              Searching
            </span>
            <Typing loop={true}>
              <span
                style={{
                  fontFamily: "fantasy",
                  color: "white",
                  fontSize: 50,
                  marginRight: 20,
                }}
              >
                ...
              </span>
              <Typing.Reset count={1} delay={500} />
            </Typing>
          </div>
        )}
      </div>
      {/*error && <ErrorPopup error={error} setError={setError} />*/}
      {error && (
        <Alert severity="info" onClose={() => setError(false)}>
          No results found!
        </Alert>
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
