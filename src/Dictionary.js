import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [resultsList, setResultsList] = useState(null);

  function handleResponse(response) {
    setResultsList(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  //documentation: https://dictionaryapi.dev/
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  return (
    <div className="Dictionary">
      <div className="text-instructions">Search for any word</div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Write here..."
          onChange={handleKeywordChange}
        ></input>
      </form>
      <Results results={resultsList} />
    </div>
  );
}
