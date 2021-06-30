import React from "react";
import axios from "axios";

import QueriesForm from "./QueriesForm";
import WordCloud from "./WordCloud";
import { TagCloud } from "react-tagcloud";

const Home = () => {
  const [category, setCategory] = React.useState('');

  const generateCloud =() => {
    console.log('test')
    axios
      .get('http://localhost:3000/generate')
      .then(res => {
        console.log(res)
      })
  }
  return (
    <div>
      <h1>News cloud</h1>
      <QueriesForm />
      <button type='button' onClick={generateCloud}>
        Generate News Cloud
      </button>
    </div>
  );
};

export default Home;
