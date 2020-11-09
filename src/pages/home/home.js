import React from 'react';
import '../../css/home.css';

import { Link } from 'react-router-dom';
// DdSqUWkPpv
import logoImg from '../../img/logo.png';
import serviçosIgm from '../../img/servicos.png';
import negociarImg from '../../img/negociar.jpeg';
import rankingImg from '../../img/ranking.jpg';

function home() {
    document.title = 'Técnicos 24H'

    return (
        <div className="container">

            <div className="cabeca">

                <div className="cont">
                    <img src={logoImg} alt="Técnicos 24H" width="60" />
                    <h4>Técnicos 24H</h4>
                </div>

                <div className="formu">
                    <Link to="/sign-client"><button>Entrar</button></Link>
                    <Link to="/cadastro"><button>Cadastre-se</button></Link>
                </div>

            </div>

            <div className="corpo">
                <div className="tras">
                    <h1>Contrate Serviços De Segurança Eletrônica On-line!</h1>
                    <Link to="/client-signup"><button>Quero Contratar</button></Link>
                    <Link to="/company-signup"><button>Quero Trabalhar</button></Link>
                </div>

                <div className="espc">
                    <h2>Precisa de Serviços?</h2>


                    <div className="diva">
                        <img src={serviçosIgm} alt="serviços" width="200" />
                        <h3>Solicite um serviço</h3>
                        <p><i>É facil. Basta solicitar um serviço que você precisa e receber reposta de um profissional.</i></p>
                    </div>

                    <div className="divb">
                        <img src={negociarImg} alt="Negociar" width="200" />
                        <h3>Negocie com o profissional</h3>
                        <p><i>Negocie direto com o profissional.</i></p>
                    </div>
                </div>

             

                <div className="dif">
                    <h2>Diferenciais</h2>

                    <div className="conteiner-grid2">
                        <div>
                            <h3 className="h3">Chat</h3>
                            <p className="p"><i>Você pode conversar com o profissional por chat.</i></p>
                        </div>
                        <div>
                            <h3 className="h3">Suporte</h3>
                            <p className="p"><i>Você terá suporte após conclusão do serviço.</i></p>
                        </div>
                        <div>
                            <h3 className="h3">Pague pela qualidade</h3>
                            <p className="p"><i>Pague quando estiver concluído.</i></p>
                        </div>
                        <div>
                            <h3 className="h3">Dúvidas</h3>
                            <p className="p"><i>Você esqueceu a senha de seu equipamentoou teve algum problema? Podemos tirar sua dúvida basta clicar no link abaixo.</i></p>
                            <a href="#">Dúvida</a>
                        </div>

                    </div>
                </div>

                <div className="rank">
                    <ul>
                        <li>
                            <h2>Ranking</h2>
                        </li>
                        <li>
                            <img src={rankingImg} alt="Ranking" width="300" />
                        </li>
                        <li>
                            <h4>Ranking dos profissionais</h4>
                        </li>
                        <ol type="1">
                            <li>Antonio Edson</li>
                            <li>Sabonete Holomeles</li>
                            <li>Gilmar Seid</li>
                            <li>Gilzão Ai Minino</li>
                            <li>Kaycky lindo </li>
                        </ol>
                    </ul>
                </div>

            </div>
            <div className="footer">

                <div className="div1">
                    <h5>Serviços</h5>
                    <a href="#">Dúvidas</a>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>


                <div className="div2">
                    <h5>Informações</h5>
                    <a href="#">Política de privacidade</a>
                    <ul>
                        <li><a href="#">Termos & condições</a></li>
                        <li><a href="#">Sobre nós</a></li>
                    </ul>
                </div>


                <div className="div3">
                    <h5>Contatos</h5>
                    <p>tecnicos24h@hotmail.com</p>
                    <p>+55 (92) 99999-9999</p>
                </div>
            </div>

        </div>
    );
}

export default home;
