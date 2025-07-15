import React, { useState } from 'react';
import '../../App.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { motion } from "framer-motion"
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase.js";
import AuthDetails from '../AuthDetails';
import { getDatabase, ref, onValue, set } from 'firebase/database';


const provider = new GoogleAuthProvider();

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();
        if (!username || !password) {
            alert('Please enter valid email & password');
            return;
        }

        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                // Get user data from database after login
                const database = getDatabase();
                const userRef = ref(database, `users/${userCredential.user.uid}`);
                onValue(userRef, (snapshot) => {
                    const data = snapshot.val();
                    if (!data) {
                        // If no profile exists, create default profile
                        set(userRef, {
                            firstName: userCredential.user.displayName || 'New',
                            lastName: 'User',
                            age: '',
                            weight: '',
                            gender: ''
                        });
                    }
                });
                navigate('/dashboard')
            })
            .catch((error) => {
                console.log(error);
                alert('Login failed: ' + error.message);
            });
    };

    const handleGoogleLogin = (event) => {
        signInWithPopup(auth, provider)
            .then((userCredential) => {
                // Get or create user data after Google login
                const database = getDatabase();
                const userRef = ref(database, `users/${userCredential.user.uid}`);
                onValue(userRef, (snapshot) => {
                    const data = snapshot.val();
                    if (!data) {
                        // If no profile exists, create one from Google data
                        const names = userCredential.user.displayName.split(' ');
                        set(userRef, {
                            firstName: names[0] || '',
                            lastName: names.slice(1).join(' ') || '',
                            age: '',
                            weight: '',
                            gender: ''
                        });
                    }
                });
                navigate('/dashboard')
            })
            .catch((error) => {
                console.log(error);
                alert('Google login failed: ' + error.message);
            });
    }

    const handleRegister = (event) => {
        event.preventDefault();
        // registration
        navigate('/register')
    };

    return (
        <div className='login-page'>
            <div className='login-container'>
                <video className='login-video' src='videos/video-3.mp4' autoPlay muted loop></video>
                <div className='form-half-container'>
                    <video className='form-half-video' src='videos/video-2.mp4' autoPlay muted loop></video>
                    <h2 className='welcome'>Welcome To Diagnosio</h2>
                <div className='login-form-container'>
                    <h2 className='login-header'>Sign In</h2>
                    <form onSubmit={handleLogin} className='login-form'>
                        <label>
                            Email ID:
                            <input type='text' value={username} onChange={handleUsernameChange} required='required' />
                        </label>
                        <label>
                            Password:
                            <input type='password' value={password} onChange={handlePasswordChange} />
                        </label>
                        <div className='buttons-login-container'>
                            <motion.button type='submit-login' onClick={handleLogin} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}transition={{ type: "spring", stiffness: 400, damping: 17 }}>Login</motion.button>
                            <motion.button onClick={handleRegister} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}transition={{ type: "spring", stiffness: 400, damping: 17 }}>Register</motion.button>
                            <motion.button className='googleBtn' onClick={handleGoogleLogin} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}transition={{ type: "spring", stiffness: 400, damping: 17 }}><FcGoogle /></motion.button>
                        </div>

                    </form>
                    <AuthDetails />
                </div>
                </div>
            </div>
        </div>
    );

}


