/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import api from "../../services/api";

import Delete from "../../img/trash-2.svg";
import Edit from "../../img/edit-2.svg";

import { Link } from "react-router-dom";

import "../../css/serv.css";

function Servico(props) {
  const { servico } = props;

  const [deleta, setDeleta] = useState([]);
  const [stats, setStatus] = useState([]);
  const token = localStorage.getItem("token");

  async function handleDeleteIncident(_id) {

    try {
      const response = await api.delete(`deletservice/${_id}`, {
        headers: {
          token,
        },
      });
      const status = response.data.status;
      alert(`${status}`);
      window.location.reload();

      setDeleta(deleta.filter((servico) => servico._id !== _id));
    } catch {
      alert("Houve um problema, tente novamente");
    }
  }

  async function handleStts(_id) {
    
    try {
      const response = await api.post(`/sttsclose/${_id}`, {
        headers: {
          token,
        },
      });

      console.log(token)
      const status = response.status;
      alert(`${status}`);
      window.location.reload();

      setStatus(stats.filter((servico) => servico._id !== _id));
    } catch {
      alert("Houve um problema, tente novamente");
    }
  }

  
  return (
    <li className="dev-item">
      <header className="dev-grid">
        <div className="user-info">
          <strong>{servico.title}</strong>
          <span>{servico.description}</span>
          <p className="userphone">{servico.userPhone}</p>
          <p className="user-name">{servico.userName}</p>
          <strong className="user-payable">
            {servico.amountPayable ? `R$${servico.amountPayable}` : ""}
          </strong>

          <div className="container-info">
            <p>
              {servico.Data_services
                ? `${servico.Data_services.split("T", 1)}`
                : ""}
            </p>
          </div>
          
        </div>
        <div className="conteiner-grid">
            <img
              className="delete"
              src={Delete}
              title="Deletar"
              onClick={() => handleDeleteIncident(servico._id)}
            />
            <Link to="/updateservice" className="edit">
              <img className="img-edit" src={Edit} title="Editar" />
            </Link>
          </div>
      </header>

      <div className="conteiner-map">
      <a id="map" href={`https://www.google.com/maps/@${servico.location.coordinates}`} target="_blank">Abrir no mapa</a>

        <section className="grid-orden">
          
          <button className="status" onClick={() => handleStts(servico._id)}>
            {servico.status}
          </button>
          <p className="orden">ID: {servico.order}</p>
        </section>
      </div>
    </li>
  );
}

export default Servico;
