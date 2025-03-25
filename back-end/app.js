import Env from "./config/env";
import express from 'express';
import connectMongoDB from "./config/dbMongo";  


const app = express();
//IMPROT DES ROUTES

//CONNEXION MONGO
connectMongoDB(Env.URI_MONGO, Env.DB_NAME);

//MIDDLEWARES

//PREFIX
app.use('/api/candidatures');
app.use('/api/statistiques');

export default app;