import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import VoltarImg from '../../img/voltar.webp';
import '../../css/perfil.css';

import api from '../../services/api';

export default function Perfil() {
    document.title = 'Perfil'

    const [profis, setProfis] = useState([]);

    const token = localStorage.getItem('token');
    useEffect(() => {
        api.get('/perfilcompany', {
            headers: {
                token,
            }
        }).then(response => {
            setProfis(response.data);
        })
    }, [token]);

    return (
        <div>
            <div className="conteiner-bar">
                <h3>Perfil</h3>
            </div>
            <div className="voltar">
                <Link to="/dashcommpany"><img src={VoltarImg} width="15" alt="voltar" /></Link>
                <Link to="/dashcommpany"><button>Voltar</button></Link>
            </div>
            <div className="conteiner-perfil">
                
                <hr/>
                <hr/>
                <p><strong>Nome:</strong> {profis.name}</p>
                <p><strong>Telefone:</strong> {profis.phone}</p>
                <p><strong>CNPJ:</strong> {profis.cpfcnpj}</p>
                <p><strong>Localidade:</strong> {profis.locality}</p>
                <p><strong>Endereço:</strong> {profis.address}</p>
                <p><strong>E-mail:</strong> {profis.email}</p>
                
            </div>
            <Link to="/perfilcompany/edit"><button className="buttonn">Editar</button></Link>

        </div>
    );
}
