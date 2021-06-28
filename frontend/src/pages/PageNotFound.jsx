import React from 'react';
import Header from '../components/Header.jsx';
import Img from '../img/img2.jpg';

import { Link } from 'react-router-dom';

export const PageNotFound = () => {

    return (
        <>
            <img src={Img} alt={""} style={{ width: "100%", height: "100%", overflow: "hidden" }} />
            <div id="titulo">
                <p id="titulo_chamada"><b style={{color: 'red'}}>Error 404.</b></p>
                <p id="titulo_texto">Esta página não existe ou foi removida.</p>
                <button className='button-comecar'>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        Página principal
                    </Link>
                </button>
            </div>

            <Header />
        </>
    )
}