import React from "react";
import { TagCloud } from "react-tagcloud";

import useStyles from "../styles";

const WordCloud = ({ keywordClick, data }) => {
  const classes = useStyles();

  return (
    <div>
      <TagCloud
        minSize={12}
        maxSize={35}
        tags={data}
        onClick={keywordClick}
      ></TagCloud>
    </div>
  );
};

export default WordCloud;
