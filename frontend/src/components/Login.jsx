import React, { useEffect, useState } from "react";
import api from "../api";
//import { Link } from 'react-router-dom';
import { Tabs, Tab, Modal } from 'react-bootstrap';
import DatePicker from 'react-date-picker'


const Login = ({ open, handleClose }) => {
  const [senha, setSenha] = useState();
  const [emailLogin, setEmailLogin] = useState();

  async function handleSubmitLogin() {

  }

  const [nome, setNome] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [emailRegister, setEmailRegister] = useState();
  const [senhaRegister, setSenhaRegister] = useState();

  async function handleSubmitRegister(e) {
    e.preventDefault();
    const response = await api.get('/Tarefas');
    console.log(response);
  }

  return (
    <Modal show={open} bsSize="lg" onHide={handleClose}>
      <Modal.Body id="modalLogin">
        <Tabs animation={true} id="controlled-tab" style={{ marginBottom: 10 }}>
          <Tab eventKey="singUp" title="Entrar">
            <form onSubmit={handleSubmitLogin}>
              <h3>Login</h3>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@email.com"
                  onChange={e => setEmailLogin(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="*******"
                  onChange={e => setSenha(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Entrar
              </button>
            </form>
          </Tab>
          <Tab eventKey="register" title="Cadastre-se">
            <form onSubmit={handleSubmitRegister}>
              <h3>Registrar</h3>
              <div className="form-group">
                <label>Nome Completo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                  onChange={e => setNome(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Data de Nascimento</label>
                <DatePicker value={dataNascimento} onChange={(date) => setDataNascimento(date)} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={e => setEmailRegister(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="*******"
                  onChange={e => setSenhaRegister(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark btn-lg btn-block">
                Cadastrar</button>
            </form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal >
  );
};

export default Login;

