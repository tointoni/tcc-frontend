import React, { useState } from "react";
import api from "../../../services/api";
import { Link, useHistory } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

import VoltarImg from "../../../img/voltar.webp";
import logoImg from "../../../../src/img/logo.png";
import '../../../css/updatepassword.css';

export default function UpdatePassword1() {
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
  const [tokenCode, setTokencode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");

  async function handleUpdate(e) {
    e.preventDefault();

<<<<<<< HEAD
    try{
    await api.post("/updatepasswordcompany", {email, tokenCode, newPassword, password});
=======
    data.append("email", email);
    data.append("token", token);
    data.append("newPassword", newPassword);
    data.append("password", password);

    await api.post("/updatepasswordcompany", data);
>>>>>>> 977e622bbb46661e18ae3c24ba66762df0432959

    history.push('/sign-company');
    }catch{}
  }

  return (
    <div className="container-up">
        
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
          <button className="button-voltar-update">Voltar</button>
        </Link>
      </div>

      <form className="container-form-update" onSubmit={handleUpdate}>
        <p>Recuperar senha</p>
        <MuiThemeProvider theme={theme}>
            <Tooltip title="Insira o E-mail">
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color="primary"
              label="E-mail"
              id="standard-basic"
              className="input-camp-update"
              type="email"
              required
            />
            </Tooltip>

            <Tooltip title="Digite seu token">
            <TextField
              value={tokenCode}
              onChange={(e) => setTokencode(e.target.value)}
              color="primary"
              label="Token"
              id="standard-basic"
              className="input-camp-update"
              type="number"
              required
            />
            </Tooltip>

            <Tooltip title="Digite sua nova senha">
            <TextField
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              color="primary"
              label="Nova senha"
              id="standard-basic"
              className="input-camp-update"
              type="password"
              required
            />
            </Tooltip>

            <Tooltip title="Repita sua senha">
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color="primary"
              label="Repita senha"
              id="standard-basic"
              className="input-camp-update"
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
