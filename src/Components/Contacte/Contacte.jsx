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
      <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact"/>

  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

    </section>
  );
}

export default Contacte;