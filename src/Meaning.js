import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="partOfSpeech">{props.meaning.partOfSpeech}</div>

      <div className="synonym">
        <strong>Synonyms:</strong>
        {props.meaning.synonyms.map(function (synonym, index) {
          return <span key={index}> {synonym} / </span>;
        })}
      </div>

      {props.meaning.definitions.map(function (definition, index) {
        console.log({ definition });
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example">
              <em>{definition.example}</em>
            </div>

            {/* <Synonyms synonyms={props.meaning.synonyms} /> */}
          </div>
        );
      })}
    </div>
  );
}
