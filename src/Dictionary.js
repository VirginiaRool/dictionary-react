import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [resultsList, setResultsList] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResultsList(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <div className="dictionary-instructions">
            What word do you want to look up?
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              defaultValue={props.defaultKeyword}
              placeholder="Type here..."
              onChange={handleKeywordChange}
            ></input>
          </form>
          <div className="dictionary-examples">
            For example: family, sunrise, mountain, etc...{" "}
          </div>
        </section>
        <Results results={resultsList} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
