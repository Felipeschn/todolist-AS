import React, { useState, useCallback } from 'react';
import Header from '../components/Header.jsx';
import Img from '../img/img2.jpg';

export const LandingPage = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenLogin = useCallback(() => {
        setOpenModal(true);
    }, [setOpenModal]);

    return (
        <>
            <Header 
                openModalLogin={openModal} 
                closeModalLogin={() => {
                    setOpenModal(false);
                }}
            />
            <img src={Img} alt={""} style={{ width: "100%", height: "100%", overflow: "hidden" }} />
            <div id="titulo">
                <p id="titulo_chamada">Chega de procastinar!</p>
                <p id="titulo_texto">Comece a usar o <b style={{color: 'rgba(155, 0, 250, 1)'}}>
                        Tarefas.io
                    </b>, e não perca nenhuma atividade!</p>
                <button className='button-comecar' onClick={handleOpenLogin}>Começar</button>
            </div>
        </>
    )
}