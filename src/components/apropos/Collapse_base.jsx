import React from "react";
import "../../style/apropos/apropos.css";

function CollapseFiability(props) {
  return (
    <details className="info__details fiability">
      <summary className="info__title">
        {props.titre} <i className="fa-solid fa-chevron-down"></i>
      </summary>
      <p className="info__text">{props.contenu}</p>
    </details>
  );
}

export default CollapseFiability;
