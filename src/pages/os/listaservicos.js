import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Link, useHistory } from 'react-router-dom';
import menu from '../../img/menu.svg';
import logoImg from '../../img/logo.png';

import '../../css/global.css';
import '../../css/listaservicos.css';
import '../../css/sidebar.css';
import '../../css/main.css';

import AddServ from './servico';
import LoadServ from './servicos';

export default function ListaServicos() {
    document.title = 'Dashboard | TECNICOS24H'
    const history = useHistory();

    const [servicos, setServicos] = useState([]);

    async function handleLogoff(e) {
        e.preventDefault();

        const token = localStorage.getItem('token');
        await api.delete('/logoff', { headers: { token } });

        localStorage.clear();

        history.push('/');
    }

    const token = localStorage.getItem('token');

    useEffect(() => {
        async function loadServicos() {
            const response = await api.get("/services", { headers: { token } });

            console.log(response)
            setServicos(response.data);
        }

        loadServicos();
    }, [token]);

    async function handleAddServs(data) {
        const response = await api.post("/service", data, { headers: { token } });

        setServicos([...servicos, response.data]);
        const status = response.data.status;
        
        alert(`${status}`)
      window.location.reload();

    }
    
    return (
        <div className="fadeIn">
            <div className="conteiner-head1">
                <input type="checkbox" id="check" />
                <label id="icone" htmlFor="check">
                    <img className="conteiner-img" src={menu} alt="menu" />
                </label>
                <div className="barra">
                <nav className="nav">
                    <Link to="/perfilclient" className="conteiner-link" ><div className="a">Ver perfil</div></Link>
                </nav>
                </div>
                <img className="conteiner-logo" src={logoImg} alt="Técnicos 24H" width="60" />
                <button className="conteiner-sair" onClick={handleLogoff} type="submit">Sair</button>
            </div>

            <div id="app">
                <aside>
                    <strong>Solicitar Serviço</strong>
                    <LoadServ onSubmit={handleAddServs} />

                </aside>
                <main className="container-main">
                    <ul className="container-ul">
                    {servicos.map(servico => (
                        <AddServ key={servico._id} servico={servico} />
                     ))}
                    </ul>
                </main>
            </div >
        </div>
    );
}