import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import useStyles from "../styles";


const About = ({light}) => {
  const classes = useStyles();

  const LightTextTypography = withStyles({
    root: {
      color: light?"black":'white'
    }
  })(Typography);


  return (
    <div style={{paddingLeft:'10%',paddingRight:'10%',paddingTop:'3rem',paddingBottom:'3rem'}}>
      <LightTextTypography variant="h3">About</LightTextTypography>
      <LightTextTypography variant="body1" color={'blue'}>
        News Cloud is designed to help streamline the process of researching 
        on certain news topics by generating a convenient wordcloud
        for you instantly, allowing easy access to buzzwords related to 
        your search keyword. This gives you the freedom to pick a relevant
        buzzword which is linked to the articles that contain them.
      </LightTextTypography>
      <LightTextTypography>Happy Searching!</LightTextTypography>
    </div>
  );
};

export default About;
