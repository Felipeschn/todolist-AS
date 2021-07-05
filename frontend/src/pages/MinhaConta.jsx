import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx'
import '../css/Account.css'
import Footer from '../components/Footer.jsx';
import Chart from '../components/Charts.jsx';
import { pegaUsuarioLogado } from "../services/usuarioLogado.js";
import Api from '../api';

var user = pegaUsuarioLogado();


export const MinhaConta = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        user = pegaUsuarioLogado();
        Api.get(`/Tarefas/${user.pkIdUser}/buscar-por-usuario`).then((response) => {
            setTodos(response.data)
        });
    }, [])

    return (
        <>
            <Header />
            <div className="account">
                <div>
                    <h1>Minha Conta</h1>
                    <span>{user.nome}</span>
                </div>
                <div>
                    <h1>Email</h1>
                    <span>{user.email}</span>
                </div>
                <div>
                    <h1>Data de nascimento</h1>
                    <span>{new Date(user.dataNasc).toLocaleDateString()}</span>
                </div>
                <h1>Estatisticas das Tarefas</h1>
                <div className="board">
                    <Chart
                        props={todos}
                    />
                </div>
            </div>

            <Footer />
        </>
    );
}