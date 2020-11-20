import React, { useState } from 'react';
import api from '../../services/api'
import { Link, useHistory } from 'react-router-dom';

import { Map, TileLayer, Marker } from 'react-leaflet';
import Leaflet from 'leaflet';
import mapMarkerImg from '../../img/map-pin.svg';

import 'leaflet/dist/leaflet.css';
import '../../css/serv1.css';
import '../../css/main1.css';

function Allservice(props) {

    const history = useHistory();

    const { servico } = props;
    const [incidents, setIncidents] = useState([]);

    async function handleShowPerfil(UserClient) {
        const data = new FormData();

            data.append('_id', UserClient);
        try {
            const token = localStorage.getItem('token')
            await api.get('/visuclient', data, { header: token })

            setIncidents(incidents.filter(servico => servico.UserClient !== UserClient))
        } catch {
            alert('Ocorreu um erro')
            history.push('/dashcommpany')
        }
    }

    const mapIcon = Leaflet.icon({
        iconUrl: mapMarkerImg,

        iconSize: [40, 20],
        iconAnchor: [20, 20],
    })

    return (
        <div>
            <li className="dev-item1">
                <header>
                    <div className="user-info1">
                        <strong>{servico.title}</strong>
                        <span>{servico.description}</span>
                        <p className="userphone1">{servico.userPhone}</p>
                        <Link to="/perfil" onClick={() => handleShowPerfil(servico.UserClient)} className="user-name1">{servico.userName}</Link>
                    </div>
                </header>
                <div className="conteiner-map1">
                <Map center={servico.location.coordinates} zoom={15}  className="map1" >
                    <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                    <Marker icon={mapIcon} position={servico.location.coordinates} />
                </Map>
                </div>
            </li>
        </div >
    );
}

export default Allservice;