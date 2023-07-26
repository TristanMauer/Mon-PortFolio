import React from "react";
import "../../styles/Filtres.scss";

function Filtres({ categoryId, tag, onClick, active }) {
  const handleClick = () => {
    onClick(categoryId); // Appelle la fonction onClick avec l'ID de la catégorie en argument
  };

  return (
    <div>
      {/* Ajout de la classe 'active' au bouton s'il est actif */}
      <button
        key={categoryId}
        className={`filtre_bouton ${active ? 'active' : ''}`}
        id={categoryId}
        onClick={handleClick}>
        {tag}
      </button>
    </div>
  );
}

export default Filtres;