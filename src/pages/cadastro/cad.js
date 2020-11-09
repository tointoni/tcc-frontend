import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/precad.css';

import VoltarImg from '../../img/voltar.webp';

export default function Cad() {
    document.title = 'Cadastrar'

    return (
        <div className="conteiner-cad">
            
            <div className="conteiner-grid1">
                <div className="grid1">
                    <Link to="/client-signup"><button className="buttona">Seja cliente</button></Link>
                </div>
                <div className="grid2">
                    <Link to="/company-signup"><button className="buttonb">Seja profissional</button></Link>
                </div>
                <div className="voltar">
                <Link to="/"><img src={VoltarImg} width="15" alt="voltar" /></Link>
                <Link to="/"><button>Voltar</button></Link>
            </div>
            </div>
        </div>
    );
}