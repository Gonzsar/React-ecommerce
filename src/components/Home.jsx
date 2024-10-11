import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase'; // Asegúrate de importar tu configuración de Firestore
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImage from '../assets/img/banner.png';
import carousel1 from '../assets/img/descuentosherramientas.png';
import carousel2 from '../assets/img/alcancedetumano.png';
import carousel3 from '../assets/img/nuevamarca.png';
import carousel4 from '../assets/img/carpinteria.png';
import carousel5 from '../assets/img/remodelacion.png';

const Home = () => {
    const [bestSellers, setBestSellers] = useState([]); // Estado para los productos más vendidos
    const [newProducts, setNewProducts] = useState([]); // Estado para los nuevos productos

    // Configuración de React Slick
    const noAutoplaySettings  = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        // Añadir margen entre los productos
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    
    // Configuración de React Slick con Autoplay
    const autoplaySettings  = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        // Añadir margen entre los productos
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    // Función para obtener productos de Firestore
    const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsArray = [];
        querySnapshot.forEach(doc => {
            productsArray.push({ id: doc.id, ...doc.data() });
        });
        // Filtrar productos por categorías (ej. "bestSellers" y "newProducts")
        setBestSellers(productsArray.filter(product => product.category2 === 'bestSellers'));
        setNewProducts(productsArray.filter(product => product.category2 === 'newProducts'));
    };

    // Obtener productos cuando el componente se monte
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            {/* Banner */}
            <div className="banner">
                <img src={bannerImage} alt="Banner" className="img-fluid w-100" />
            </div>

            {/* Carrusel */}
            <div id="carouselExampleIndicators" className="carousel slide mt-4" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100" alt="Carrusel 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100" alt="Carrusel 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100" alt="Carrusel 3" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel4} className="d-block w-100" alt="Carrusel 4" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel5} className="d-block w-100" alt="Carrusel 5" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            {/* Sección de Más Vendidos */}
            <div className="container">
                <h2 className="text-center mb-4 bg-secondary text-white rounded-pill">Más Vendidos</h2>
                <Slider {...autoplaySettings} className='mb-5'>
                    {bestSellers.map(product => (
                        <div key={product.id} className="card">
                            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">${product.price}</p>
                                <Link to={`/item/${product.id}`} className="btn btn-primary">Ver Detalles</Link>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Sección de Nuevos Ingresos */}
                <h2 className="text-center mb-4 bg-secondary text-white rounded-pill">Nuestros Productos</h2>
                <Slider {...noAutoplaySettings} className='mb-5'>
                    {newProducts.map(product => (
                        <div key={product.id} className="card">
                            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">${product.price}</p>
                                <Link to={`/item/${product.id}`} className="btn btn-primary">Ver Detalles</Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Home;
