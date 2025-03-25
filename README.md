# app-candidature
# app-candidature
Samy Bakouche
Fara Hovor
Youva Houche

**Objectif**

Développer une application web simple permettant aux étudiants de suivre leurs candidatures de stage et d'alternance de manière organisée.

---

**1️⃣ Fonctionnalités principales**

**Ajout d’une candidature**
Formulaire avec : Entreprise, Poste, Lien de l’offre, Date d’envoi, Statut (En attente, Acceptée, Refusée).

**Affichage des candidatures**
Liste des candidatures avec filtres simples (par entreprise, par statut).
Possibilité de modifier ou supprimer une candidature.

**Suivi des relances**
Ajout manuel d’une date de relance.
Affichage des candidatures à relancer (ex : celles non mises à jour depuis 7 jours).
**Statistiques basiques**
Nombre total de candidatures.
Nombre de candidatures en attente, acceptées et refusées.

**2️⃣ Contraintes techniques**
Back-end : Node.js avec Express.js (CRUD API REST pour gérer les candidatures).
Base de données : MongoDB.
Front-end :  React.js .
Stockage local (pas besoin de cloud ou d’authentification pour simplifier).

**3️⃣ Critères d’évaluation**
Interface claire et accessible (pas de design complexe, mais fonctionnel). CRUD fonctionnel (Ajout, Modification, Suppression, Affichage). Gestion basique des relances (simple indicateur pour signaler les candidatures à relancer). Statistiques affichées en bas de page (total des candidatures, répartition par statut).