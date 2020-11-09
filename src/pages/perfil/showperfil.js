import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import VoltarImg from '../../img/voltar.webp';

import '../../css/global.css';
import '../../css/perfil.css';

import api from '../../services/api';

export default function Perfil() {
    document.title = 'Perfil'
    
    const [clients, setClients] = useState([]);

    const token = localStorage.getItem('token');
    useEffect(() => {
        api.get('visuclient', {
            headers: {
                token,
            }
        }).then(response => {
            setClients(response.data);
        })
    }, [token]);
    
    return (
        <div>
            <div className="conteiner-bar">
                <h3>Perfil</h3>
            </div>
            <div className="voltar">
                <Link to="/dashclient"><img src={VoltarImg} width="15" alt="voltar" /></Link>
                <Link to="/dashclient"><button>Voltar</button></Link>
            </div>
            <div className="conteiner-perfil">
                <img id="img" src={clients.avatar_url} alt={clients.avatar_url} width="200px" /><br/>
                <hr/>
                <hr/>
                <p><strong>Nome:</strong> {clients.name}</p>
                <p><strong>Telefone:</strong> {clients.phone}</p>
                <p><strong>CPF:</strong> {clients.cpfcnpj}</p>
                <p><strong>Endereço:</strong> {clients.address}</p>
                <p><strong>E-mail:</strong> {clients.email}</p>
            </div>
            <Link to="/perfilclient/edit"><button className="buttonn">Editar</button></Link>
        </div>
    );
}
