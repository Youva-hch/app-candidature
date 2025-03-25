import ModelCandidature from '../models/candidature.model.js';

export const createCandidature = async (req, res) => {
    try {
        // requete post
        await ModelCandidature.create(req.body);
        res.status(201).json({ message: "ajouté", response });
    } catch (error) {}
}

export const readCandidature = () => {

}

export const deleteCandidature = () => {

}

export const updateCandidature = () => {

}