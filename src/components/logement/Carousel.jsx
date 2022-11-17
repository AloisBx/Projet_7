import React, { Fragment, useState } from "react";
import "../../style/logement/carousel.css";

function Carousel({ pictures }) {
  const [locationPicture, setLocationPicture] = useState(0);

  const nextPicture = () => {
    setLocationPicture(
      locationPicture === pictures.length - 1 ? 0 : locationPicture + 1
    );
  };

  const previousPicture = () => {
    setLocationPicture(
      locationPicture === 0 ? pictures.length - 1 : locationPicture - 1
    );
  };
  if (pictures.length > 1) {
    return (
      <>
        <i className="fa-solid fa-chevron-left" onClick={previousPicture}></i>
        <i className="fa-solid fa-chevron-right" onClick={nextPicture}></i>
        {pictures.map((img, index) => (
          <div key={index}>
            {index === locationPicture && (
              <Fragment>
                <img
                  src={img}
                  alt="Photos du logement"
                  className="carousel__image"
                />
                <span className="carousel__number">
                  {locationPicture + 1}/{pictures.length}
                </span>
              </Fragment>
            )}
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        {pictures.map((img, index) => {
          return (
            <div key={index}>
              {index === locationPicture && (
                <img
                  src={img}
                  alt="Photos du logement"
                  className="carousel__image"
                />
              )}
            </div>
          );
        })}
      </>
    );
  }
}

export default Carousel;
