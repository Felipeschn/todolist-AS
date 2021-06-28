import React from 'react';
import Header from '../components/Header.jsx'
import '../css/Account.css'
import Footer from '../components/Footer.jsx';

export const MinhaConta = () => {
    return (
        <>
            <Header />
            <div className="account">
                <h1>Minha Conta</h1>
                <hr></hr>
            </div>
            <Footer />
        </>
    );
}