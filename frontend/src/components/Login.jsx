import React from "react";
//import { Link } from 'react-router-dom';
import { Tabs, Tab, Modal } from 'react-bootstrap';

const Login = ({ open, handleClose }) => {
  return (
    <Modal show={open} bsSize="lg" onHide={handleClose}>
      <Modal.Body id="modalLogin">
        <Tabs animation={true} id="controlled-tab" style={{ marginBottom: 10 }}>
          <Tab eventKey="singUp" title="Entrar">
            <form>
              <h3>Login</h3>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@email.com"
                />
              </div>
              <div className="form-group">
                <label>Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="*******"
                />
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Entrar
              </button>
            </form>
          </Tab>
          <Tab eventKey="register" title="Cadastre-se">
            <form>
              <h3>Registrar</h3>
              <div className="form-group">
                <label>Nome Completo</label>
                <input type="text" className="form-control" placeholder="Nome" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" />
              </div>

              <div className="form-group">
                <label>Senha</label>
                <input type="password" className="form-control" placeholder="*******" />
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">Cadastrar</button>
            </form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal >
  );
};

export default Login;

