import React, { useState, useCallback, useEffect } from 'react';
import Login from './Login.jsx';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData.jsx';
import '../css/NavBar.css'

const Header = ({ openModalLogin, closeModalLogin }) => {
    const [openModal, setOpenModal] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        if (openModalLogin) {
            setOpenModal(true)
        } else {
            setOpenModal(false)
        }
    }, [openModalLogin])

    const handleOpenModal = useCallback(() => {
        setOpenModal(true);
    }, [setOpenModal]);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            {openModal ? (
                <Login
                    open={openModal}
                    handleClose={() => {
                        setOpenModal(false);
                        closeModalLogin();
                    }}
                />
            ) : (
                ''
            )}

            <div className="NavBar">
                <div className="container">
                    <div>
                        <Link to="#" className="menu-bars">
                            <i className="fa fa-bars" onClick={showSidebar} />
                        </Link>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className="nav-menu-items" onClick={showSidebar}>
                            <li className="navbar-toggle">
                                <Link to="#" className="menu-bars">
                                    <i className="fa fa-times" aria-hidden="true" />
                                </Link>
                            </li>
                            {SideBarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>


                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <h1 className="logo">Tarefas.io</h1>
                    </Link>

                    <button className='btn btn-light' onClick={handleOpenModal}>Login</button>
                </div>

            </div>
        </>
    );
};

export default Header;