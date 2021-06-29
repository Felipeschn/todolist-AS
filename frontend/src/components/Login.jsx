import React, { useState } from "react";
import api from "../api";
import { Tabs, Tab, Modal } from 'react-bootstrap';


const Login = ({ open, handleClose }) => {
  const [emailLogin, setEmailLogin] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmitLogin(e) {
    e.preventDefault();
    const response = await api.get(`/Usuarios/${emailLogin}/${senha}`);
    console.log(response);
  }

  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [senhaRegister, setSenhaRegister] = useState('');

  async function handleSubmitRegister(e) {
    e.preventDefault();
    const response = await api.post('/Usuarios', {
      nome: nome,
      datanasc: dataNascimento,
      email: emailRegister,
      senha: senhaRegister
    });
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
                  required
                />
              </div>
              <div className="form-group">
                <label>Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="*******"
                  onChange={e => setSenha(e.target.value)}
                  required
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
                  onChange={e => setNome(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Data de Nascimento</label>
                <input
                  type="date"
                  className="form-control"
                  value={dataNascimento}
                  onChange={e => setDataNascimento(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={e => setEmailRegister(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="*******"
                  onChange={e => setSenhaRegister(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark btn-lg btn-block">Cadastrar</button>
            </form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal >
  );
};

export default Login;

