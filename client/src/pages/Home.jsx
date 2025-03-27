import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Home = () => {
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data, status } = await axios.get('http://localhost:8000/api/candidatures');
                if (status === 200) setPost(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des candidatures", error);
            }
        };
        fetchPost();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">📋 Mes Candidatures</h1>
                {post.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {post.map(item => (
                            <div key={item._id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <h2 className="text-xl font-semibold text-gray-700 mb-2">{item.entreprise}</h2>
                                <p className="text-gray-500">📅 Date de candidature : {item.date || 'Non précisée'}</p>
                                <p className={`text-sm font-medium mt-2 ${item.status === 'Accepté' ? 'text-green-500' : item.status === 'Refusé' ? 'text-red-500' : 'text-yellow-500'}`}>
                                    {item.status || 'En attente'}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 text-lg">Aucune candidature trouvée.</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
