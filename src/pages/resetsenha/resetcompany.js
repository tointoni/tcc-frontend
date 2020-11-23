import React, { useState } from "react";
import api from "../../services/api";
import { Link, useHistory } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

import VoltarImg from "../../img/voltar.webp";
import logoImg from "../../../src/img/logo.png";
import '../../css/resetsolici.css';

export default function ResetPasswordCommpany() {
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

  async function handleResetCommpany(e) {
    e.preventDefault();
try{
    await api.post("/resert-passwordcompany", { email });
}catch{}
history.push("/update-password-commpany");

  }

  return (
    <div className="container-solicita">
        
      <div className="container-resetsoli">
        <div className="container-head2">
          <img src={logoImg} alt="Técnicos 24H" width="60" />
          <h4>TECNICO24H</h4>
        </div>
      </div>

      <div className="voltar-reset">
        <Link to="/sign-client">
          <img src={VoltarImg} width="20" alt="voltar" />
        </Link>
        <Link to="/sign-client">
          <button className="button-voltar-reset">Voltar</button>
        </Link>
      </div>

      <form className="container-form-resetsoli" onSubmit={handleResetCommpany}>
        <p>Recuperar senha</p>
        <MuiThemeProvider theme={theme} className="muitheme">
          <Tooltip
            title="Insira o E-mail para solicitar o token."
            aria-label="Insira o E-mail para solicitar o token."
          >
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
        </MuiThemeProvider>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
