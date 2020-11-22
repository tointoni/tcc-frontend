import React, { useState, useMemo } from "react";

import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import api from "../../services/api";
import "../../css/cad.css";

import logoImg from "../../../src/img/logo.png";
import VoltarImg from "../../img/voltar.webp";
import camera from "../../img/camera.svg";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Cadastro({ history }) {
  document.title = "Cadastro";

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

  const classes = useStyles();

  const [thumbnail, setThumbnail] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpfcnpj, setCpfcnpj] = useState("");
  const [locality, setLocality] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleCadastro(e) {
    e.preventDefault();
    const data = new FormData();

    data.append("name", name);
    data.append("phone", phone);
    data.append("cpfcnpj", cpfcnpj);
    data.append("locality", locality);
    data.append("address", address);
    data.append("email", email);
    data.append("password", password);
    data.append("thumbnail", thumbnail);

    try {
      await api.post("client-signup", data);

      history.push("/");
    } catch {}
    alert("Seu cadastro foi feito com sucesso");
  }

  return (
    <div className="container-cad">
      <div className="cabe">
        <div className="conte">
          <img src={logoImg} alt="Técnicos 24H" width="60" />
          <h4>TECNICO24H</h4>
        </div>
      </div>

      <div className="voltar-cad">
        <Link to="/cadastro">
          <img src={VoltarImg} width="20" alt="voltar" />
        </Link>
        <Link to="/cadastro">
          <button>Voltar</button>
        </Link>
      </div>

      <div className="formula">
        <form onSubmit={handleCadastro} autoComplete="off">
          <div className="formula-avatar">
            <label
              id="thumbnail"
              style={{ backgroundImage: `url(${preview})` }}
              className={thumbnail ? "has-thumbnail" : ""}
            >
              <input
                type="file"
                onChange={(e) => setThumbnail(e.target.files[0])}
                accept="image/png, image/jpeg"
              />
              <img src={camera} alt="Selecione a imagem" />
            </label>
          </div>
          <div className="formula-form">
            <MuiThemeProvider theme={theme}>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                color="primary"
                size="small"
                id="standard-basic"
                type="text"
                label="Seu Nome"
                autoFocus
                required
              />
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                pattern="exemplo@exemplo.com"
                label="Seu e-mail"
                required
              />
              <TextField
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                size="small"
                type="tel"
                pattern="\([0-9]{2}\)[0-9]{5}-[0-9]{4}"
                maxLength="11"
                title="(99)99999-9999"
                label="Telefone"
                required
              />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="small"
                type="password"
                label="Sua senha"
                required
              />
              <TextField
                value={cpfcnpj}
                onChange={(e) => setCpfcnpj(e.target.value)}
                size="small"
                label="CPF"
                required
              />
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">UF</InputLabel>
                <Select
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  required
                >
                  <MenuItem value="Acre">Acre</MenuItem>
                  <MenuItem value="Alagoas">Alagoas</MenuItem>
                  <MenuItem value="Amapá">Amapá</MenuItem>
                  <MenuItem value="Amazonas">Amazonas</MenuItem>
                  <MenuItem value="Bahia">Bahia</MenuItem>
                  <MenuItem value="Ceará">Ceará</MenuItem>
                  <MenuItem value="Distrito Federal">Distrito Federal</MenuItem>
                  <MenuItem value="Espírito Santo">Espírito Santo</MenuItem>
                  <MenuItem value="Goiás">Goiás</MenuItem>
                  <MenuItem value="Maranhão">Maranhão</MenuItem>
                  <MenuItem value="Mato Grosso">Mato Grosso</MenuItem>
                  <MenuItem value="Mato Grosso do Sul">
                    Mato Grosso do Sul
                  </MenuItem>
                  <MenuItem value="Minas Gerais">Minas Gerais</MenuItem>
                  <MenuItem value="Pará">Pará</MenuItem>
                  <MenuItem value="Paraíba">Paraíba</MenuItem>
                  <MenuItem value="Paraná">Paraná</MenuItem>
                  <MenuItem value="Pernambuco">Pernambuco</MenuItem>
                  <MenuItem value="Piauí">Piauí</MenuItem>
                  <MenuItem value="Roraima">Roraima</MenuItem>
                  <MenuItem value="Rondônia">Rondônia</MenuItem>
                  <MenuItem value="Rio de Janeiro">Rio de Janeiro</MenuItem>
                  <MenuItem value="Rio Grande do Norte">
                    Rio Grande do Norte
                  </MenuItem>
                  <MenuItem value="Rio Grande do Sul">
                    Rio Grande do Sul
                  </MenuItem>
                  <MenuItem value="Santa Catarina">Santa Catarina</MenuItem>
                  <MenuItem value="São Paulo">São Paulo</MenuItem>
                  <MenuItem value="Sergipe">Sergipe</MenuItem>
                  <MenuItem value="Tocantins">Tocantins</MenuItem>
                </Select>
              </FormControl>
              <TextField
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                size="small"
                label="Seu endereço"
                required
              />
            </MuiThemeProvider>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
export default Cadastro;
