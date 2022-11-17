import React from "react";
import "../../style/home/home.css";

function Banner() {
  return (
    <section className="home__banner">
      <div className="home__background">
        <h1 className="home__title">
          <span>Chez vous,&nbsp;</span>
          <span>partout et ailleurs</span>
        </h1>
      </div>
    </section>
  );
}

export default Banner;
