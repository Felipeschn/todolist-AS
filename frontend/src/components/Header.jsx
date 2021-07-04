import React, { useState, useCallback, useEffect } from "react";
import Login from "./Login.jsx";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData.jsx";
import "../css/NavBar.css";
import {
  verificaSePossuiUsuarioLogado,
  deslogar, pegaUsuarioLogado
} from "../services/usuarioLogado.js";

const Header = ({ openModalLogin, closeModalLogin }) => {
  const [openModal, setOpenModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [usuarioJaLogado, setUsuarioJaLogado] = useState(false);
  const [usuario, setUsuario] = useState("");



  useEffect(() => {
    setUsuarioJaLogado(verificaSePossuiUsuarioLogado());
    setUsuario(pegaUsuarioLogado());
  }, [usuarioJaLogado, openModal]);

  useEffect(() => {
    if (openModalLogin) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  }, [openModalLogin]);

  const handleOpenModal = useCallback(() => {
    setOpenModal(true);
  }, [setOpenModal]);

  const handleLogOut = () => {
    deslogar();
    setUsuarioJaLogado(false);
  };

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
        ""
      )}
      <div className="NavBar">
        <div className="container">
          {usuarioJaLogado ? (
            <>
              <div className="menuTitulo">
                <Link to="#" className="menu-bars">
                  <i className="fa fa-bars" onClick={showSidebar} />
                </Link>

                <Link to="/home" style={{ textDecoration: "none" }}>
                  <h1 className="logo">Tarefas.io</h1>
                </Link>
              </div>
              <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
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
                    );
                  })}
                </ul>
              </nav>

              <div>
                <span>Olá, {usuario.nome}</span>
                <Link
                  to="/"
                  className="btn btn-danger"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    className="btn btn-danger-inside"
                    onClick={handleLogOut}
                  >
                    Sair
                  </button>
                </Link>
              </div>

            </>
          ) : (
            <>
              <h1 className="logo">Tarefas.io</h1>
              <button className="btn btn-light" onClick={handleOpenModal}>
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
