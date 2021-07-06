import React from "react";

import useStyles from "../styles";

const KeywordData = ({ showKeywordModal, setShowKeywordModal, keywordObj }) => {
  const classes = useStyles();

  const { keyword, titles, urls, descriptions, urlToImages } = keywordObj;

  return (
    <div>
      <button onClick={() => setShowKeywordModal(false)}>Close</button>
      {titles.map((title, index) => {
        return (
          <div>
            <a href={`${urls[index]}`}>{title}</a>
            <img alt={`${title}`} src={`${urlToImages[index]}`} />
            <div>{`${descriptions[index]}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default KeywordData;
