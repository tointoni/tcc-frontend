import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { Link } from 'react-router-dom';

import List from '../os/listatudo';

import menu from '../../img/menu.svg';
import logoImg from '../../img/logo.png';

import '../../css/global.css';
import '../../css/listaservicos.css';

export default function Dashboard({ history }) {
    document.title = 'Dashboard | Técnicos 24H'

    const clientname = localStorage.getItem('clientname');
    const token = localStorage.getItem('token');

    async function handleLogoff(e) {
        e.preventDefault();
        
        await api.delete('/logoff', { headers: { token } });

        localStorage.clear();

        history.push('/');
    }

    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        async function loadServicos() {
            const response = await api.get("/list-service", { headers: { token } });

            setServicos(response.data);
        }

        loadServicos();
    }, [token]);

    return (
        <div className="fadeIn">
            <div className="conteiner-head1">
                <input type="checkbox" className="conteiner-input" id="check" />
                <label id="icone" htmlFor="check">
                    <img className="conteiner-img" src={menu} alt="menu" />
                </label>
                <div className="barra">
                <nav className="nav">
                    <Link to="/perfilcompany" className="conteiner-link" ><div className="a">Ver perfil</div></Link>
                </nav>
                </div>
                <img className="conteiner-logo" src={logoImg} alt="Técnicos 24H" width="60" />
                <button className="conteiner-sair" onClick={handleLogoff} type="submit">Sair</button>
            </div>
            <div id="app">
                <main>
                    <ul>
                        {servicos.map(servico => (
                            <List key={servico._id} servico={servico} />
                        ))}
                    </ul>
                </main>
            </div >
        </div>
    );
}