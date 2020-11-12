import React, { useState, useMemo } from 'react';
import api from '../../services/api';
import '../../css/cad.css';

import logoImg from '../../../src/img/logo.png';
import VoltarImg from '../../img/voltar.webp';

import { Link } from 'react-router-dom';

function Cadastro({history}) {
    document.title = 'Cadastro'


    const [thumbnail, setThumbnail] = useState(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cpfcnpj, setCpfcnpj] = useState('');
    const [locality, setLocality] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    async function handleCadastro(e){
        e.preventDefault();
        const data = new FormData();

        data.append('name', name);
        data.append('phone', phone);
        data.append('cpfcnpj', cpfcnpj);
        data.append('locality', locality);
        data.append('address', address);
        data.append('email', email);
        data.append('password', password);
        data.append('thumbnail', thumbnail);

try{
    await api.post('client-signup', data);

       history.push('/');
    }catch{
    }
      alert('Seu cadastro foi feito com sucesso');
    }

    return (
        <div className="container-cad">

            <div className="cabe">
                <div className="conte">
                    <img src={logoImg} alt="Técnicos 24H" width="60" />
                    <h4>Técnicos 24H</h4>
                </div>
            </div>

            <div className="voltar">
                <Link to="/cadastro"><img src={VoltarImg} width="20" alt="voltar" /></Link>
                <Link to="/cadastro"><button>Voltar</button></Link>
            </div>

            <div className="formula">

                <form onSubmit={handleCadastro}>

                    <label id="avatar" style={{ backgroundImage: `url(${preview})` }}>
                        <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
                    </label>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Seu nome" required />
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Seu e-mail" required />


                    <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Telefone" required />
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Sua senha" required />

                    <input value={cpfcnpj} onChange={e => setCpfcnpj(e.target.value)} placeholder="CPF" required />
                    <input value={locality} onChange={e => setLocality(e.target.value)} placeholder="UF" required />

                    <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Seu endereço" required />

                    <button type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
    );
}
export default Cadastro;