import "../../styles/Apropos.scss";

function Apropos(){
    return (
        <div className="apropos_conteneur" id="apropos">
            <div className="apropos_centrage">
            <h1 className="apropos_titre"> A propos</h1>
            <div className="apropos_from_conteneur">
            <p className="apropos_p"> Depuis mon enfance je suis intéresser par les nouvelles technologies et la culture japonaise. Après une année en licence de psychologie
            qui c'est solder par un échec j'ai préférer directement travailler afin de prendre du recul sur mes réelles envies. </p>
            <p className="apropos_p">Fin 2021 je découvre le développement web et j'ai directement 
            compris que c'est ce qui m'intéresser, décembre 2022 j'ai décider de passer le pas et débuter la formation diplomante d'OpenClassrooms.</p>
            <div className="form"> </div>
            </div>
            </div>
        </div>
    )
}
export default Apropos