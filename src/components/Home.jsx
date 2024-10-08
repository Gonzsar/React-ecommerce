import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import bannerImage from '../assets/img/banner.png';
import carousel1 from '../assets/img/descuentosherramientas.png';
import carousel2 from '../assets/img/alcancedetumano.png';
import carousel3 from '../assets/img/nuevamarca.png';
import carousel4 from '../assets/img/carpinteria.png';
import carousel5 from '../assets/img/remodelacion.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    // Configuración de React Slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // Mostrar solo un producto a la vez
        slidesToScroll: 1,
        arrows: true,  // Mostrar flechas de navegación
        autoplay: false  // El deslizamiento automático está desactivado
    };

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

            {/* Secciones de productos */}
            <div className="container">
            <h2 className="text-center mb-4 bg-secondary text-white rounded-pill">Más Vendidos</h2>
                <Slider {...settings} className='mb-5' >
                    {/* Productos más vendidos */}
                    <div className="card">
                        <img src="/assets/img/producto1.jpg" className="card-img-top" alt="Producto 1" />
                        <div className="card-body">
                            <h5 className="card-title">Producto 1</h5>
                            <Link to="/item/1" className="btn btn-primary">Ver Detalles</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/img/producto2.jpg" className="card-img-top" alt="Producto 2" />
                        <div className="card-body">
                            <h5 className="card-title">Producto 2</h5>
                            <Link to="/item/2" className="btn btn-primary">Ver Detalles</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/img/producto1.jpg" className="card-img-top" alt="Producto 3" />
                        <div className="card-body">
                            <h5 className="card-title">Producto 3</h5>
                            <Link to="/item/3" className="btn btn-primary">Ver Detalles</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/img/producto2.jpg" className="card-img-top" alt="Producto 4" />
                        <div className="card-body">
                            <h5 className="card-title">Producto 4</h5>
                            <Link to="/item/4" className="btn btn-primary">Ver Detalles</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/img/producto1.jpg" className="card-img-top" alt="Producto 5" />
                        <div className="card-body">
                            <h5 className="card-title">Producto 5</h5>
                            <Link to="/item/5" className="btn btn-primary">Ver Detalles</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/img/producto2.jpg" className="card-img-top" alt="Producto 6" />
                        <div className="card-body">
                            <h5 className="card-title">Producto 6</h5>
                            <Link to="/item/6" className="btn btn-primary">Ver Detalles</Link>
                        </div>
                    </div>
                </Slider>

                <h2 className="text-center mb-4 bg-secondary text-white rounded-pill">Nuestros Productos</h2>
                <Slider {...settings} className='mb-5'>
                    {/* Nuevos ingresos */}
                    <div className="card">
                        <img src="/assets/img/producto3.jpg" className="card-img-top" alt="Producto 3" />
                        <div className="card-body">
                            <h5 className="card-title">Producto 3</h5>
                            <Link to="/item/3" className="btn btn-primary">Ver Detalles</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/img/producto4.jpg" className="card-img-top" alt="Producto 4" />
                        <div className="card-body">
                            <h5 className="card-title">Producto 4</h5>
                            <Link to="/item/4" className="btn btn-primary">Ver Detalles</Link>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Home;
