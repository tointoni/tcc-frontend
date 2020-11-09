import React, { useState } from "react";
import api from '../../services/api';

import { Map, TileLayer, Marker } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import Delete from '../../img/trash-2.svg';
import Edit from '../../img/edit-2.svg';
import mapMarkerImg from '../../img/map-pin.svg';

import { Link } from 'react-router-dom';

import '../../css/serv.css';

function Servico(props) {
  const { servico } = props;

  const [incidents, setIncidents] = useState([]);

  const token = localStorage.getItem('token');

  async function handleDeleteIncident(_id) {
    try {
      const response = await api.delete(`deletservice/${_id}`, {
        headers: {
          token,
        }
      });

      const status = response.data.status;
      alert(`${status}`)
      window.location.reload();


      setIncidents(incidents.filter(servico => servico._id !== _id));
    } catch {
    alert("Houve um problema, tente novamente")
    }
  }

  async function handleEditIncident(_id) {

    setIncidents(incidents.filter(servico => servico._id !== _id));

  }

  const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [40, 20],
    iconAnchor: [20, 20],
  })

  return (
    <li className="dev-item">
      <header>
        <div className="user-info">
          <strong>{servico.title}</strong>
          <span>{servico.description}</span>
          <p className="userphone">{servico.userPhone}</p>
          <Link to="" className="userName"><p className="user-name">{servico.userName}</p></Link>
          <strong className="user-payable">{servico.amountPayable ? `R$${servico.amountPayable}` : ''}</strong>
          <p>{servico.Data_services ? `${servico.Data_services.split("T", 1)}` : ''}</p>
        </div>
        <div className="conteiner-grid">
          <img className="delete" src={Delete} title="Deletar" onClick={() => handleDeleteIncident(servico._id)} />
          <Link to="/updateservice" className="edit"><img className="img-edit" src={Edit} title="Editar" onClick={() => handleEditIncident(servico._id)} /></Link>
        </div>
      </header>
      <div className="conteiner-map">
        <Map className="map" center={[-3.077183, -60.05899]} zoom={15} style={{ width: '350px', height: '150px' }} >
          <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
          <Marker icon={mapIcon} position={[-3.077183, -60.05899]} />
        </Map>
        <p className="status">{servico.status}</p>
      </div>
    </li>

  );
}

export default Servico;
