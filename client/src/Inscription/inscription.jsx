import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './index.css';  
import axios from 'axios';
import { Link } from 'react-router-dom';

const Inscription = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();  

        if (!email || !password || !confirmPassword) {
            setError('Tous les champs doivent être remplis.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas.');
            return;
        }

        setError('');
        
        axios.post("http://localhost:3000/candidature/inscription", { email, password })
        .then((result) => {
            console.log(result);
            if(result !== "Don't work") navigate('/Connexion');
        })
        .catch(() => {
            setError('Une erreur s\'est produite. Veuillez réessayer.');
        });

        console.log('User registered', { email, password });
    };

    return (
        <div>
            <header>
                <div className="logo">SYF</div>
                <nav>
                    <ul>
                        <li><Link to="/connexion">Sign up</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <div className="form-container">
                    <h1>Inscription</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input 
                                type="email" 
                                placeholder="Mail*" 
                                name='email'
                                onChange={handleEmailChange} 
                                required 
                            />
                        </div>

                        <div className="input-group">
                            <input 
                                type="password" 
                                placeholder="Password*" 
                                name='password'
                                onChange={handlePasswordChange} 
                                required 
                            />
                        </div>

                        <div className="input-group">
                            <input 
                                type="password" 
                                placeholder="Confirm Password*" 
                                name='confirmPassword'
                                onChange={handleConfirmPasswordChange} 
                                required 
                            />
                        </div>

                        {error && <p style={{ color: 'red' }}>{error}</p>} 
                        <button type="submit">Sign in</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Inscription;
