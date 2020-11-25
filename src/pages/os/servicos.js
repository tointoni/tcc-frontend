import { Select } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Service(props) {
  const { onSubmit } = props;

  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amountPayable, setamountPayable] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        alert("Não foi possível pegar a sua localização, tente novamente.");
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      title,
      description,
      amountPayable,
      latitude,
      longitude,
    });
    window.location.reload();

    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Título</InputLabel>
          <Select
            name="title"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          >
          <MenuItem value="Sistema de alarme">Sistema de alarme</MenuItem>
          <MenuItem value="Sistema de monitoramento (CFTV)">
            Sistema de monitoramento (CFTV)
          </MenuItem>
          <MenuItem value="Cerca elétrica">Cerca elétrica</MenuItem>
          <MenuItem value="Controle de acesso">Controle de acesso</MenuItem>
          <MenuItem value="Suporte em Geral">Suporte em Geral</MenuItem>
        </Select>
        </FormControl>
      </div>

      <div className="input-block">
        <label htmlFor="description">Descrição</label>
        <input
          name="description"
          id="description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="amountPayable">Valor pretendido a pagar</label>
        <input
          type="number"
          name="amountPayable"
          id="amountPayable"
          value={amountPayable}
          onChange={(e) => setamountPayable(e.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            required
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            required
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Enviar Solicitação</button>
    </form>
  );
}

export default Service;
