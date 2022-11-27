import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [resultsList, setResultsList] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResultsList(response.data);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001c589a81e3dd546ada414d2730e0afb4e";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headerAuthorization = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, { headers: headerAuthorization })
      .then(handlePexelsResponse);
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
          <div className="suggested-words">
            Suggested words: family, sunrise, mountain...{" "}
          </div>
        </section>
        <Results results={resultsList} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
