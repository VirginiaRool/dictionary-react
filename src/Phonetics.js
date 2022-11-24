import React from "react";
import "./Phonetics.css";

export default function Phonetis(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      {props.phonetics.text}
    </div>
  );
}
