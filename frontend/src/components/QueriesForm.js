import React from "react";

const QueriesForm = ({ queries, setQueries }) => {
  return (
    <div>
      <h1>Queries form</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label for="countriesList">Select a country(Optional)</label>
          <select
            name="countriesList"
            id="countriesList"
            onChange={(e) =>
              setQueries({
                ...queries,
                country:
                  e.target.value === "-" ? queries.country : e.target.value,
              })
            }
          >
            <option value="-" selected>
              -
            </option>
            <option value="au">Australia</option>
            <option value="ca">Canada</option>
            <option value="my">Malaysia</option>
            <option value="nz">New Zealand</option>
            <option value="sg">Singapore</option>
            <option value="gb">United Kingdom</option>
            <option value="us">America</option>
          </select>
        </div>
        <div>
          <label for="categoryList">Select a category</label>
          <select
            name="categoryList"
            id="categoryList"
            onChange={(e) =>
              setQueries({ ...queries, category: e.target.value })
            }
          >
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general" selected>
              General
            </option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </div>
        <div>
          <label for="keyword">Input an optional keyword</label>
          <input
            type="text"
            id="keyword"
            name="keyword"
            onChange={(e) =>
              setQueries({ ...queries, keyword: e.target.value })
            }
          ></input>
        </div>
      </form>
    </div>
  );
};

export default QueriesForm;
