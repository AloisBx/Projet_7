import React from "react";
import BannerApropos from "../components/apropos/Banner_Apropos";
import Base from "../components/apropos/Collapse_base";

const Apropos = () => (
  <div className="apropos">
    <BannerApropos />
    <section className="apropos__info">
      <Base
        titre="Fiabilité"
        contenu="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conforment aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />
      <Base
        titre="Respect"
        contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Base
        titre="Services"
        contenu="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      />
      <Base
        titre="Sécurité"
        contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </section>
  </div>
);

export default Apropos;
