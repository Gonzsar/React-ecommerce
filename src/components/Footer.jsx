import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaWhatsapp, FaEnvelope, FaClock, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row text-center text-md-start">
                    {/* Sección de contacto */}
                    <div className="col-md-6">
                        <h5>Contáctanos</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="https://wa.me/+59894086710" className="text-light text-decoration-none">
                                    <FaWhatsapp className="me-2" /> WhatsApp
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="mailto:dansardi1405@gmail.com" className="text-light text-decoration-none">
                                    <FaEnvelope className="me-2" /> Email
                                </a>
                            </li>
                            <li className="mb-2">
                                <FaClock className="me-2" /> Lunes a Viernes: 9:00 AM - 5:00 PM
                            </li>
                            <li className="mb-2">
                                <FaPhone className="me-2" /> Teléfono: 2292 5796 / 094 086 431
                            </li>
                            <li className="mb-2">
                                <FaMapMarkerAlt className="me-2" /> Dirección: Don Luciano Larrañaga, entre Piedras y Manuel Oribe, Pando, Canelones.
                            </li>
                        </ul>
                    </div>

                    {/* Sección de copyright */}
                    <div className="col-md-6 d-flex align-items-center justify-content-center justify-content-md-end">
                        <p className="mb-0">© Copyright 2024 FRIO POLAR</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
