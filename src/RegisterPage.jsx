// RegisterPage.jsx
import React, { useState } from 'react';
import { auth } from '../src/firebase/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import './css/AuthStyles.css';  // Asegúrate de crear y vincular este archivo CSS
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [step, setStep] = useState(1);  // Control de pasos para mostrar diferente contenido
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleNextStep = (e) => {
        e.preventDefault();
        if (firstName && lastName && phoneNumber) {
            setStep(2);
        } else {
            Swal.fire('Error', 'Por favor completa todos los campos.', 'error');
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
    
            // Validaciones antes de proceder con el registro
            if (!firstName || !lastName) {
            Swal.fire('Error', 'Por favor, ingresa tu nombre y apellido.', 'error');
            return;
            }
        
            if (!email.includes('@')) {
            Swal.fire('Error', 'Por favor, ingresa un correo electrónico válido.', 'error');
            return;
            }
        
            if (password.length < 6) {
            Swal.fire('Error', 'La contraseña debe tener al menos 6 caracteres.', 'error');
            return;
            }
        
            try {
            // Creamos el usuario con email y contraseña
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
            // Después de crear el usuario, actualizamos el perfil para incluir nombre y apellido
            await updateProfile(userCredential.user, {
                displayName: `${firstName} ${lastName}`,
            });
        
            Swal.fire('¡Registro exitoso!', 'Tu cuenta ha sido creada.', 'success');
            navigate('/');
            } catch (error) {
            Swal.fire('Error', error.message, 'error');
            }
        };


    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">Registrarse</h2>
                {step === 1 ? (
                    <form onSubmit={handleNextStep}>
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="auth-input"
                        />
                        <input
                            type="text"
                            placeholder="Apellido"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="auth-input"
                        />
                        <input
                            type="tel"
                            placeholder="Número de celular"
                            value={phoneNumber}
                            onChange={(e) => {
                                const input = e.target.value;
                                // Permite solo caracteres numéricos (0-9)
                                if (/^\d*$/.test(input)) {
                                    setPhoneNumber(input);
                                }
                            }}
                            className="auth-input"
                        />
                        <button type="submit" className="auth-button">Siguiente</button>
                    </form>
                ) : (
                    <form onSubmit={handleRegister}>
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
                        <button type="submit" className="auth-button">Registrarse</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RegisterPage;
