import "../../styles/skills.scss";
import { FaHtml5 } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import {FaWrench } from 'react-icons/fa';




function Skills(){
    return( 

        <div className="skill_conteneur" id="competence">
            <h1 className="title_skill" > Mes Compétences</h1> 
        <div className="card_conteneur">
        <div className="card_skill"> 
            <div className="card_logo">
            <FaHtml5 className="card_icone"/>
            </div>
            <h2 className="card_title">frontend</h2>
            <ul className="card_list">
                <li className="card_item">HTML/CSS</li>
                <li className="card_item">Javascripts</li>
                <li className="card_item">REACT</li>
            </ul>
            </div>
            <div className="card_skill"> 
            <div className="card_logo">
            <FaDatabase className="card_icone"/>
            </div>
            <h2 className="card_title">backend</h2>
            <ul className="card_list">
                <li className="card_item">Nodejs</li>
                <li className="card_item">Express</li>
                <li className="card_item">MongoDB</li>
            </ul>
            </div>
           
          
             <div className="card_skill"> 
            <div className="card_logo">
            <FaWrench className="card_icone"/>
            </div>
            <h2 className="card_title">outils</h2>
            <ul className="card_list">
                <li className="card_item">Git/Git hub</li>
                <li className="card_item" >Figma</li>
                <li className="card_item">Notion</li>
            </ul>
            </div>
            </div>
        </div>
    )
}
export default Skills