import React, { useState, useMemo, useEffect } from 'react';

import api from '../../services/api';
import { Link } from 'react-router-dom';
import VoltarImg from '../../img/voltar.webp';

import '../../css/editar.css';

export default function EditClient() {
    document.title = 'Alteração de cadastro'
    const [dados, setDados] = useState([]);

    const [thumbnail, setThumbnail] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [locality, setLocality] = useState();
    const [address, setAddress] = useState();
    const [email, setEmail] = useState();

    const token = localStorage.getItem('token');

    useEffect(() => {
        async function loadDados() {
            const response = await api.get("perfilclient", { headers: { token } });

            setDados(response.data);
        }

        loadDados();
    }, [token]);

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    async function handleAltera(e) {
        e.preventDefault();

        const response = await api.put('perfilclient/edit', { name, phone, locality, address, email, thumbnail }, { headers: { token } });
        const status = response.data.status;

        alert(`${status}`);
    }


    return (
        <div>
            <header className="conteiner-head">
                <h1>Alterar seus dados</h1>
            </header>
            <div className="voltar">
                <Link to="/perfilclient"><img src={VoltarImg} width="15" alt="voltar" /></Link>
                <Link to="/perfilclient"><button>Voltar</button></Link>
            </div>

            <form className="conteiner-form" onSubmit={handleAltera}>

                <label id="avatar" style={{ backgroundImage: `url(${preview})` }}>
                    <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
                </label>
                <label><strong>Nome:</strong><input className="input" value={name} onChange={e => setName(e.target.value)} placeholder={dados.name} /></label>
                <label><strong>Email:</strong><input className="input" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder={dados.email} /></label>
                <label><strong>Telefone:</strong><input className="input" value={phone} onChange={e => setPhone(e.target.value)} placeholder={dados.phone} /></label>
                <label><strong>UF:</strong><input className="input" value={locality} onChange={e => setLocality(e.target.value)} placeholder={dados.locality} /></label>
                <label><strong>Endereço:</strong><input className="input" value={address} onChange={e => setAddress(e.target.value)} placeholder={dados.address} /></label>

                <button className="buttonw" type="submit">Alterar</button>
            </form>


        </div>
    );
}