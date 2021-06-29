import React from 'react';
import Header from '../components/Header.jsx'
import '../css/Account.css'
import Footer from '../components/Footer.jsx';
import Chart from '../components/Charts.jsx';

export const MinhaConta = () => {
    return (
        <>
            <Header />
            <div className="account">
                <div>
                    <h1>Minha Conta</h1>
                    <span>Nome</span>
                </div>
                <div>
                    <h1>Email</h1>
                    <span>email</span>
                </div>
                <div>
                    <h1>Data de nascimento</h1>
                    <span>01/01/0000</span>
                </div>
                <h1>Estatisticas das Tarefas</h1>
                <div className="board">
                    <Chart />
                </div>
            </div>

            <Footer />
        </>
    );
}