import Env from "./config/env.js";
import express from 'express';
import connectMongoDB from "./config/dbMongo.js";  
import candidatureRouter from './router/candidature.router.js';
import cors from 'cors';

const app = express();
//IMPROT DES ROUTES

//CONNEXION MONGO
connectMongoDB(Env.URI_MONGO_LOCAL, Env.DB_NAME);

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//PREFIX
app.use('/api/candidatures', candidatureRouter);
//app.use('/api/statistiques');

export default app;