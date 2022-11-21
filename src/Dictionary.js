import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [resultsList, setResultsList] = useState({});

  function handleResponse(response) {
    setResultsList(response.data[0]);
    console.log(response.data[0]);
    console.log(response.data[0].meaning[0].definitions[0].definitions);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  //documentation: https://dictionaryapi.dev/
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  function search(event) {
    event.preventDefault();
  }

  return (
    <div className="Dictionary">
      <div className="text-instructions">Search for any word</div>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}></input>
      </form>
      <Results results={resultsList} />
    </div>
  );
}
