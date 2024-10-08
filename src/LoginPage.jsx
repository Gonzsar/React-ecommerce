// LoginPage.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Swal from 'sweetalert2';
import { auth } from './firebase/firebase';  // Asegúrate de tener la configuración de Firebase
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import './css/AuthStyles.css';  // Asegúrate de crear y vincular este archivo CSS

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password, rememberMe);
            Swal.fire('¡Bienvenido!', 'Inicio de sesión exitoso', 'success');
            navigate('/');
        } catch (error) {
            Swal.fire('Error', 'No se pudo iniciar sesión. Verifica tus credenciales.', 'error');
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            Swal.fire('¡Bienvenido!', 'Has iniciado sesión con Google.', 'success');
            navigate('/');
        } catch (error) {
            Swal.fire('Error', 'No se pudo iniciar sesión con Google.', 'error');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="auth-input"
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="auth-input"
                    />
                    <div className="remember-me">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="rememberMe">Recordarme</label>
                    </div>
                    <div className="auth-buttons">
                        <button type="submit" className="auth-button">Iniciar sesión</button>
                        <button type="button" className="auth-button google-login" onClick={handleGoogleLogin}>
                            Iniciar sesión con Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
