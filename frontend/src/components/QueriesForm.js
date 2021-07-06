import React from "react";
import {
  TextField,
  Button,
  NativeSelect,
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
      <Typography variant="h4">Search options</Typography>
      <form onSubmit={submitForm}>
        <FormControl>
          <InputLabel id="countriesList">Select a country</InputLabel>
          <NativeSelect
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
            <option value="global">Global</option>
            <option value="au">Australia</option>
            <option value="ca">Canada</option>
            <option value="my">Malaysia</option>
            <option value="nz">New Zealand</option>
            <option value="sg">Singapore</option>
            <option value="gb">United Kingdom</option>
            <option value="us">America</option>
          </NativeSelect>
        </FormControl>
        <FormControl>
          <InputLabel id="categoryList">Select a category</InputLabel>
          <NativeSelect
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
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </NativeSelect>
        </FormControl>
        <FormControl>
          <TextField
            id="keywordsField"
            type="text"
            name="keywords"
            label="Keyword(s)"
            onChange={(e) => {
              queries.current = {
                ...queries.current,
                keywords: e.target.value,
              };
            }}
          />
        </FormControl>
        <Button color="primary" variant="contained" type="submit">
          Generate news cloud
        </Button>
      </form>
    </div>
  );
};

export default QueriesForm;
