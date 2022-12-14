import React from "react";
import "../../style/logement/details.css";

function Collapse_Details({ description, equipments }) {
  return (
    <>
      <details className="info__collapse description">
        <summary className="collapse__title">
          Description <i className="fa-solid fa-chevron-down"></i>
        </summary>
        <p className="collapse__text">{description}</p>
      </details>
      <details className="info__collapse equipment">
        <summary className="collapse__title">
          Équipements <i className="fa-solid fa-chevron-down"></i>
        </summary>
        <ul className="collapse__text">
          {equipments.map((equipment) => (
            <li key={`${equipment}`}>{equipment}</li>
          ))}
        </ul>
      </details>
    </>
  );
}

export default Collapse_Details;
