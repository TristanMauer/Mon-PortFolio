import "../../styles/contacte.scss";
//import React, { useState } from 'react';
//import axios from 'axios';

function Contacte() {
  /*const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
}
    // Envoi des données du formulaire au backend Node.js
    axios.post('http://localhost:4000/envoyer-email', formData)
      .then((response) => {
        console.log(response.data); // Affichez la réponse du serveur (facultatif)
        // Réinitialisez le formulaire après l'envoi réussi
        setFormData({
          nom: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error(error);
      });
  ;*/

  return (
    <section className="conteneur" id="contacte">
      <h1 className="title-contacte"> Me Contacter</h1>
      <form  className="form_container"  method="post" data-netlify="true">
              <label className="form_label">
                Nom:
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom"
                  className="form_input"
                  required
                />
              </label>
              <br />
              <label className="form_label">
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="form_input"
                  required
                />
              </label>
              <br />
              <label className="form_label">
                Message:
                <textarea
                  name="message"
                  placeholder="Votre message"
                  required
                  className="form_input"
                />
              </label>
              <br />
              <button type="submit" className="form_button">Envoyer</button>
            </form>
    </section>
  );
}

export default Contacte;