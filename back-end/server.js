import app from './app.js';
import Env from './config/env.js';

// Connexion à MongoDB

// Démarrage du serveur
const PORT = Env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});