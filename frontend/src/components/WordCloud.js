import React from "react";
import { TagCloud } from "react-tagcloud";
import { Popover } from "@material-ui/core";
import { Container } from "@material-ui/core";
import useStyles from "../styles";

const WordCloud = ({ keywordClick, data }) => {
  const classes = useStyles();

  return (
    <TagCloud
      minSize={18}
      maxSize={55}
      tags={data}
      onClick={keywordClick}
      colorOptions={{ luminosity: "light" }}
      className={classes.wordCloud}
    ></TagCloud>
  );
};

export default WordCloud;
