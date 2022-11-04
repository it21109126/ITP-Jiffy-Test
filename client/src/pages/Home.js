import React from 'react';

import Header from '../components/HeaderHome';
import CartMenu from '../components/CartMenu';
import MobileMenu from '../components/MobileMenu';
import MainSlider from '../components/MainSlider';
import ProductTab from '../components/ProductTab';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Header />
            <div className="ltn__utilize-overlay"></div>
            <ProductTab />
            <Footer />
        </div>
    );   
}

export default Home;