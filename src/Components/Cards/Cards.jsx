import "../../styles/card.scss";
import React, { useState } from "react";
import {FaArrowRight } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Carousel from "../../Components/Carousel/Carousel";

function Card({ id, title, cover, categoryId, mission, description, pictures, tags, legend, github }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleGithubInRedirect = () => {
    window.open(`${github}`, '_blank');
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const renderTags = () => {
    return tags.map((tag, index) => (
      <p key={index}  className="languages">{tag}</p>
    ));
  };

  return (
  
    <section className="projet" id={categoryId}>
      <article className="card" id={id} onClick={openModal}> 
        <img src={cover} alt={title} className="image_card" />
        <h2 className="title_card disable">{title}</h2>
      </article>

      {modalOpen && (
        <div className="overlay">
        <div className="modal" id={`modal-${id}`}>
          <button className="btn_close" onClick={() => setModalOpen(false)}> <FaArrowRight /> </button>
          <h2 className="modal-titre">{title}</h2>
          <h3 className="modal-legend">{legend}</h3>
          <Carousel imageSlider={pictures}/>
         
          <div className="modal-contenu">
            <p className="modal-texte">{mission}</p>
            <p className="modal-texte">{description}</p>
            <button onClick={handleGithubInRedirect} className='modal_icon' aria-label="bouton vers mon github"> <FaGithub /></button>
            <div className="conteneur-tags">
            {renderTags()}
            </div>
            </div >
          
        </div>
        </div>
      )}
    </section>
    
  );
}

export default Card;