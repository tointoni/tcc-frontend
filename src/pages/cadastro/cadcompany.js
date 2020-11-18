import React, { useState, useMemo } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import camera from '../../img/camera.svg';

import api from '../../services/api';
import '../../css/cad.css';

import logoImg from '../../../src/img/logo.png';
import VoltarImg from '../../img/voltar.webp';

import { Link } from 'react-router-dom';

function Cadastro({history}) {
    document.title = 'Cadastro'

    const theme = createMuiTheme({
        palette: {
          primary: {
            light: '#2e89d5',
            main: '#2677C3',
            dark: '#1f66b1',
            contrastText: '#fff',
          },
        },
    });

    const [thumbnail, setThumbnail] = useState(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cpfcnpj, setCpfcnpj] = useState('');
    const [locality, setLocality] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [evaluation, setEvaluation] = useState("");
    const [description, setDescription] = useState("");
    const [specialization, setSpecialization] = useState("");

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
        data.append('evaluation', evaluation);
        data.append('description', description);
        data.append('specialization', specialization);

try{
    await api.post('/company-signup', data);

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

            <div className="voltar-cad">
                <Link to="/cadastro"><img src={VoltarImg} width="20" alt="voltar" /></Link>
                <Link to="/cadastro"><button>Voltar</button></Link>
            </div>

            <div className="formula">

                <form onSubmit={handleCadastro}>
                <div className="formula-avatar">
                <label id="thumbnail" 
                    style={{ backgroundImage: `url(${preview})` }}
                    className={thumbnail ? 'has-thumbnail' : ''}
                    >
                        <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept="image/png, image/jpeg" />
                        <img src={camera} alt="Selecione a imagem" />
                    </label>
                    </div>
                    <div className="formula-form">
                    <MuiThemeProvider theme={theme}>
                    <TextField value={name} onChange={e => setName(e.target.value)} label="Seu nome" required />
                    <TextField value={email} onChange={e => setEmail(e.target.value)} type="email" pattern="exemplo@exemplo.com" label="Seu e-mail" required />

                    <TextField value={phone} onChange={e => setPhone(e.target.value)} type="tel" label="Telefone" pattern="\([0-9]{2}\)[0-9]{5}-[0-9]{4}" maxLength="11" title="(99)99999-9999" required />
                    <TextField value={password} onChange={e => setPassword(e.target.value)} type="password" label="Sua senha"required />

                    <TextField value={cpfcnpj} onChange={e => setCpfcnpj(e.target.value)} label="CNPJ" required />
                    <TextField value={locality} onChange={e => setLocality(e.target.value)} label="UF" required />

                    <TextField value={address} onChange={e => setAddress(e.target.value)} label="Seu endereço" required />
                    <TextField value={description} onChange={e => setDescription(e.target.value)} label="Descrição" required />
                    <TextField value={specialization} onChange={e => setSpecialization(e.target.value)} label="Sua Especialização" required />
                    </MuiThemeProvider>
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
    );
}
export default Cadastro;