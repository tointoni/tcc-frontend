import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import { Link } from 'react-router-dom';
import VoltarImg from '../../img/voltar.webp';
import '../../css/editar.css';

export default function EditCompany() {
    document.title = 'Alteração de cadastro'


    const [thumbnail, setThumbnail] = useState(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [cpfcnpj, setCpfcnpj] = useState("");
    const [locality, setLocality] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [evaluation, setEvaluation] = useState("");
    const [description, setDescription] = useState("");
    const [specialization, setSpecialization] = useState("");

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    async function handleAltera(e) {
        e.preventDefault();
        const token = localStorage.getItem('token');

        await api.put('/perfilcompany/edit', { name, phone, cpfcnpj, locality, address, email, thumbnail, evaluation, description, specialization }, { headers: { token } });
    }


    return (
        <div>
            <header className="conteiner-head">
                <h1>Alterar seus dados</h1>
            </header>
            <div className="voltar">
                <Link to="/perfilcompany"><img src={VoltarImg} width="20" alt="voltar" /></Link>
                <Link to="/perfilcompany"><button>Voltar</button></Link>
            </div>
            <form className="conteiner-form" onSubmit={handleAltera}>

                <label id="avatar" style={{ backgroundImage: `url(${preview})` }}>
                    <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
                </label>
                <label><strong>Nome:</strong><input className="input" value={name} onChange={e => setName(e.target.value)} placeholder="Seu nome" /></label>
                <label><strong>E-mail:</strong><input className="input" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Seu e-mail" /></label>

                <label><strong>Telefone:</strong><input className="input" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Telefone" /></label>

                <label><strong>CNPJ:</strong><input className="input" value={cpfcnpj} onChange={e => setCpfcnpj(e.target.value)} placeholder="Seu CNPJ" /></label>
                <label><strong>Localidade:</strong><input className="input" value={locality} onChange={e => setLocality(e.target.value)} placeholder="UF" /></label>

                <label><strong>Endereço:</strong><input className="input" value={address} onChange={e => setAddress(e.target.value)} placeholder="Seu endereço" /></label>
                <label><strong>Evolução:</strong><input className="input" value={evaluation} onChange={e => setEvaluation(e.target.value)} placeholder="Seu endereço" /></label>
                <label><strong>Descrição:</strong><input className="input" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" /></label>
                <label><strong>Especialização:</strong><input className="input" value={specialization} onChange={e => setSpecialization(e.target.value)} placeholder="Sua Especialização" /></label>

                <button className="buttonw" type="submit">Alterar</button>
            </form>

        </div>
    );
}