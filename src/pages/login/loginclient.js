import React, { useState } from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "../../css/login.css";

import api from "../../services/api";

import logoImg from "../../../src/img/logo.png";
import VoltarImg from "../../img/voltar.webp";

import { Link, useHistory } from "react-router-dom";

export default function LoginClient() {
  const history = useHistory();
  document.title = "Login";

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#2e89d5",
        main: "#2677C3",
        dark: "#1f66b1",
        contrastText: "#fff",
      },
    },
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const response = await api.post("/sign-client", { email, password });
    const { name } = response.data;
    const status = response.data.status;

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("clientname", name);

    alert(`${status}`);

    if (response.data.token) {
      history.push("/dashclient");
    }
  }

  return (
    <div>
      <div className="cabe">
        <div className="conte">
          <img src={logoImg} alt="Técnicos 24H" width="60" />
          <h4>TECNICOS24H</h4>
        </div>
        <div className="type-login">
          <Link to="/sign-company" className="linkq">
            Logar como Empresa
          </Link>
        </div>
      </div>

      <div className="voltar-login">
        <Link to="/">
          <img src={VoltarImg} width="20" alt="voltar" />
        </Link>
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </div>

      <div className="formular">
        <p>Login Cliente</p>
        <form onSubmit={handleLogin} autoComplete="off">
          <div className="content-form">
            <MuiThemeProvider theme={theme}>
              <TextField
                size="small"
                id="standard-basic"
                label="Seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
              <TextField
                label="Sua Senha"
                id="standard-basic"
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
            </MuiThemeProvider>
          </div>
          <button type="submit">Logar</button>
          <div className="content-links">
            <Link to="/cadastro" className="linkw">
              Não tem uma conta?
            </Link>
            <Link to="/reset-password-client" className="conteiner-reset">
              Esqueci minha senha
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
