import "../../styles/banner.scss";

function Banner(){
    return(
        <div className="banner_conteneur">
            <div className="conteneur-p">
            <div className=" form_design "></div>
            <p className="banner_p">
            Bonjour !
            <br />
             Je suis Tristan Mauer
            <br />
                Développeur web
            </p>
            </div>
            <div className="conteneur_planete">
            <img className="banner_profil" src="../../images/profil.webp" alt="tristan"/>
            </div>
        </div>
    )

}

export default Banner;