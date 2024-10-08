import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartPage from './components/CartPage';
import Footer from './components/Footer'; 
import { CartProvider } from './context/CartContext';
import CheckoutPage from './components/CheckoutPage'; 
import LoginPage from './LoginPage';
import { AuthContext } from './context/AuthContext'; // Agregado para manejo de autenticación
import RegisterPage from './RegisterPage';

function App() {
    const { currentUser } = useContext(AuthContext);

    const ProtectedRoute = ({ children }) => {
        return currentUser ? children : <Navigate to="/login" />;
    };

    return (
        <Router basename="/React-ecommerce">
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ProtectedRoute><ItemDetailContainer /></ProtectedRoute>} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
                <Footer />
            </CartProvider>
        </Router>
    );
}

export default App;
