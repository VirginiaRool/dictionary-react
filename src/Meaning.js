import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning.definition);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        console.log({ definition });
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <strong>Example:</strong>
              <em>{definition.example}</em>

              <Synonyms synonyms={props.meaning.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
