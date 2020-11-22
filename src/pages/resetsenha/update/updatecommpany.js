import React, { useState } from "react";
import api from "../../../services/api";
import { Link, useHistory } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

import VoltarImg from "../../../img/voltar.webp";
import logoImg from "../../../../src/img/logo.png";

export default function ResetPassword() {
  const history = useHistory();

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

  document.title = "Recuperação de senha"

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");

  async function handleReset(e) {
    e.preventDefault();
    const data = new FormData();

    data.append("email", email);
    data.append("token", token);
    data.append("newPassword", newPassword);
    data.append("password", password);

    await api.post("/resert-passwordcompany", data);

    history.push('/sign-company');
  }

  return (
    <div className="container-update">
        
      <div className="container-update">
        <div className="container-head3">
          <img src={logoImg} alt="Técnicos 24H" width="60" />
          <h4>TECNICO24H</h4>
        </div>
      </div>

      <div className="voltar-update">
        <Link to="/sign-company">
          <img src={VoltarImg} width="20" alt="voltar" />
        </Link>
        <Link to="/sign-company">
          <button className="button-voltar-reset">Voltar</button>
        </Link>
      </div>

      <form className="container-form-update" onSubmit={handleReset}>
        <p>Recuperar senha</p>
        <MuiThemeProvider theme={theme}>
            <Tooltip title="Insira o E-mail">
            <TextField
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color="primary"
              label="E-mail"
              id="standard-basic"
              className="input-email-reset"
              type="email"
              required
            />
            </Tooltip>

            <Tooltip title="Digite seu token">
            <TextField
              name="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              color="primary"
              label="Token"
              id="standard-basic"
              type="number"
              required
            />
            </Tooltip>

            <Tooltip title="Digite sua nova senha">
            <TextField
              name="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              color="primary"
              label="Nova senha"
              id="standard-basic"
              type="password"
              required
            />
            </Tooltip>

            <Tooltip title="Repita sua senha">
            <TextField
              name="newpassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color="primary"
              label="Repita senha"
              id="standard-basic"
              className="input-email-reset"
              type="password"
              required
            />
            </Tooltip>
        </MuiThemeProvider>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
