import React from 'react';
import Header from '../components/Header.jsx'
import '../css/Account.css'
import Footer from '../components/Footer.jsx';

export const MinhaConta = () => {
    return (
        <>
            <Header />
            <div className="account">
                <h2>Minha COnta</h2>
            </div>
            <Footer />
        </>
    );
}