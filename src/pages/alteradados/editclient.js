import React, { useState, useMemo, useEffect } from "react";

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
import { Link } from "react-router-dom";
import VoltarImg from "../../img/voltar.webp";

import "../../css/editar.css";
import camera from "../../img/camera.svg";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function EditClient() {
  document.title = "Alteração de cadastro";
  const [dados, setDados] = useState([]);

  const [thumbnail, setThumbnail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [locality, setLocality] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();

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

  const token = localStorage.getItem("token");

  useEffect(() => {
    async function loadDados() {
      const response = await api.get("perfilclient", { headers: { token } });

      setDados(response.data);
    }

    loadDados();
  }, [token]);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  
  async function handleAltera(e) {
    e.preventDefault();

    const response = await api.put(
      "perfilclient/edit",
      { name, phone, locality, address, email, thumbnail },
      { headers: { token } }
    );

    const status = response.data.status;

    alert(`${status}`);
  }

  return (
    <div>
      <header className="conteiner-head">
        <h3>Alterar seus dados</h3>
      </header>
      <div className="voltar-edit">
        <Link to="/perfilclient">
          <img src={VoltarImg} width="20" alt="voltar" />
        </Link>
        <Link to="/perfilclient">
          <button>Voltar</button>
        </Link>
      </div>

      <div className="edit">
        <form onSubmit={handleAltera}>
          <div className="conteiner-form">
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
          
          <div className="conteiner-form-input">
            <MuiThemeProvider theme={theme}>
              <label>
                <strong>Nome:</strong>
                <TextField
                  autocomplete="off"
                  size="small"
                  id="standard-basic"
                  placeholder={dados.name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                <strong>E-mail:</strong>
                <TextField
                  size="small"
                  id="standard-basic"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder={dados.email}
                />
              </label>
              <label>
                <strong>Telefone:</strong>
                <TextField
                  size="small"
                  id="standard-basic"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={dados.phone}
                />
              </label>
              <FormControl id="form-control" className={classes.formControl}>
                <InputLabel
                  className="input-select"
                  id="demo-simple-select-label"
                >
                  UF
                </InputLabel>
                <Select
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
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
              <label>
                <strong>Endereço:</strong>
                <TextField
                  size="small"
                  id="standard-basic"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={dados.address}
                />
              </label>
            </MuiThemeProvider>
          </div>

          <button className="buttonw" type="submit">
            Alterar
          </button>
        </form>

      </div>

    </div>
  );
}
