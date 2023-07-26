// Import des modules
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv =require('dotenv');
// Configuration d'Express
const app = express();

dotenv.config();
const user = process.env.EMAIL;
const password = process.env.PASSWORD
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Node.js.');
});

// Définition de la route POST pour le formulaire de contact
app.post('/envoyer-email', (req, res) => {
  const { nom, email, message } = req.body;

  // Configuration du service de messagerie
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Ex: Gmail, Yahoo, etc. Consultez la documentation de Nodemailer pour plus d'options.
    auth: {
      user: user, // Adresse e-mail d'envoi
      pass: password, // Mot de passe de l'adresse e-mail d'envoi
    },
  });

  // Contenu de l'e-mail
  const mailOptions = {
    from:  user, // Adresse e-mail d'envoi (doit être la même que dans l'authentification)
    to: user, // Adresse e-mail de réception (votre adresse e-mail)
    subject: `Nouveau message de ${nom}`,
    text: `${message}\n\nEnvoyé par : ${email}`,
  };

  // Envoi de l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Une erreur est survenue lors de l\'envoi de l\'e-mail.');
    } else {
      console.log('E-mail envoyé avec succès: ' + info.response);
      res.status(200).send('E-mail envoyé avec succès !');
    }
  });
});

// Démarrage du serveur
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}.`);
});