import React from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from "@material-ui/core";

import useStyles from "../styles";

const QueriesForm = ({ queries, generateCloud }) => {
  const classes = useStyles();

  const submitForm = (e) => {
    e.preventDefault();
    generateCloud();
  };
  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        className={classes.queriesFormTitle}
      >
        Search Options
      </Typography>
      <form
        noValidate
        autoComplete="off"
        onSubmit={submitForm}
        className={classes.form}
      >
        <FormControl className={classes.formComponent}>
          <InputLabel id="countriesList">Country</InputLabel>
          <Select
            labelId="countriesList"
            id="countriesListSelect"
            defaultValue="global"
            onChange={(e) =>
              (queries.current = {
                ...queries.current,
                country: e.target.value === "global" ? "" : e.target.value,
              })
            }
          >
            <MenuItem value="global">Global</MenuItem>
            <MenuItem value="au">Australia</MenuItem>
            <MenuItem value="ca">Canada</MenuItem>
            <MenuItem value="my">Malaysia</MenuItem>
            <MenuItem value="nz">New Zealand</MenuItem>
            <MenuItem value="sg">Singapore</MenuItem>
            <MenuItem value="gb">United Kingdom</MenuItem>
            <MenuItem value="us">America</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formComponent}>
          <InputLabel id="categoryList">Category</InputLabel>
          <Select
            labelId="categoryList"
            id="categoryListSelect"
            defaultValue="general"
            onChange={(e) =>
              (queries.current = {
                ...queries.current,
                category: e.target.value,
              })
            }
          >
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="entertainment">Entertainment</MenuItem>
            <MenuItem value="general">General</MenuItem>
            <MenuItem value="health">Health</MenuItem>
            <MenuItem value="science">Science</MenuItem>
            <MenuItem value="sports">Sports</MenuItem>
            <MenuItem value="technology">Technology</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formComponent}>
          <TextField
            id="keywordsField"
            type="text"
            name="keywords"
            label="Keyword(s)"
            helperText="Space-separated keywords"
            onChange={(e) => {
              queries.current = {
                ...queries.current,
                keywords: e.target.value,
              };
            }}
          />
        </FormControl>
        <Button
          color="primary"
          variant="outlined"
          type="submit"
          className={classes.submitButton}
        >
          Generate news cloud
        </Button>
      </form>
    </div>
  );
};

export default QueriesForm;
