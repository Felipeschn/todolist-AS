import React, { useState } from "react";
import api from "../api";
import { Tabs, Tab, Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import _ from "lodash";

const Login = ({ open, handleClose }) => {
  const [emailLogin, setEmailLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState([]);
  const history = useHistory();

  async function handleSubmitLogin(e) {
    e.preventDefault();
    const response = await api.get(`/Usuarios/${emailLogin}/${senha}`);
    console.log(response);
    //arrumar isso
    // if (_.isEmpty(response)) {
    //   setErros(['Usuário ou senha incorreta!']);
    //   setTimeout(() => setErros(), 5000);
    //   return;
    // }
    window.localStorage.setItem("usuarioLogado", JSON.stringify(response));
    history.push("/home");
    handleClose();
  }

  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [senhaRegister, setSenhaRegister] = useState("");

  async function handleSubmitRegister(e) {
    e.preventDefault();
    const response = await api.post("/Usuarios", {
      nome: nome,
      datanasc: dataNascimento,
      email: emailRegister,
      senha: senhaRegister,
    });
    console.log(response);
    handleClose();
  }

  return (
    <Modal show={open} bsSize="lg" onHide={handleClose}>
      <Modal.Body id="modalLogin">
        <Tabs animation={true} id="controlled-tab" style={{ marginBottom: 10 }}>
          <Tab eventKey="singUp" title="Entrar">
            <br />
            {erros.map((erro) => {
              return (
                <div key={erro} className="row col-xs-12">
                  <div className="alert alert-danger col-xs-12 col-md-6 col-md-offset-3 centered">
                    {erro}
                  </div>
                </div>
              );
            })}
            <form onSubmit={handleSubmitLogin}>
              <h3>Login</h3>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@email.com"
                  onChange={(e) => setEmailLogin(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Senha</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setSenha(e.target.value)}
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
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Data de Nascimento</label>
                <input
                  type="date"
                  className="form-control"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => setEmailRegister(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="*******"
                  onChange={(e) => setSenhaRegister(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Cadastrar
              </button>
            </form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
