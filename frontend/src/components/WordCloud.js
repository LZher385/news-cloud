import React from "react";

import { TagCloud } from "react-tagcloud";

const WordCloud = ({ keywordClick, data }) => {
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
