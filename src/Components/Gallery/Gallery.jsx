import datas from'../../datas/project.json';
import React, { useState } from "react";
import datasFiltres from "../../datas/data-filtres.json"
import Card from '../Cards/Cards';
import Filtres from '../Filtres/Filtres';
import '../../styles/gallery.scss';

function Gallery() { 
    const [activeCategory, setActiveCategory] = useState(0);

    const handleFilterClick = (categoryId) => {
      setActiveCategory(categoryId);
    };
  
    const filteredProjects = datas.filter((project) => {
      return activeCategory === 0 || project.categoryId === activeCategory;
    });   

    return(
   
        <section id="projets">
            
                <h1 className='title_projet' > Mes projets</h1>
            <article className="filtre">
            {datasFiltres.map(dataFiltre => (
                <Filtres
                key={dataFiltre.categoryId}
                categoryId={dataFiltre.categoryId}
                onClick={handleFilterClick}
                tag={dataFiltre.tag} 
                active={dataFiltre.categoryId === activeCategory}
                />
            ))}
            </article>
        <article className='gallery' >
            {filteredProjects.map((project) => (
              
                    <Card 
                        key={project.id}
                        categoryId={project.categoryId}
                        id={project.id}
                        title={project.title}
                        cover={project.images}
                        description={project.description}
                        mission={project.mission}
                        pictures={project.pictures}
                        tags={project.tags}
                        legend={project.legend}
                        />
                
            ))}
            </article>
            
        </section>
        
    )
}

export default Gallery


