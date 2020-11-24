import React, { useState } from "react";
import "../../css/home.css";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { Link, useHistory } from "react-router-dom";
// DdSqUWkPpv
import logoImg from "../../img/logo.png";
import serviçosIgm from "../../img/servicos.png";
import negociarImg from "../../img/negociar.jpeg";

function Home() {
  document.title = "TECNICOS24H";
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClient = () => {
    history.push("/client-signup");
  };

  const handleCommpany = () => {
    history.push("/company-signup");
  };

  return (
    <div className="container">
      <div className="cabeca">
        <div className="cont">
          <img src={logoImg} alt="Técnicos 24H" width="60" />
          <h4>TECNICOS24H</h4>
        </div>

        <div className="formu">
          <Link to="/sign-client">
            <button>Entrar</button>
          </Link>
          <Button
          size="small"
          className="simple-menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Cadastre-se
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClient}>Cliente</MenuItem>
            <MenuItem onClick={handleCommpany}>Empresa</MenuItem>
          </Menu>
        </div>
      </div>

      <div className="corpo">
        <div className="tras">
          <h1>Contrate Serviços De Segurança Eletrônica On-line!</h1>
          <div className="button-tras">
            <Link to="/client-signup" className="button-tras-a">
              Quero Contratar
            </Link>
            <Link to="/company-signup" className="button-tras-a">
              Quero Trabalhar
            </Link>
          </div>
        </div>

        <div className="espc">
          <h2>Precisa de Serviços?</h2>

          <div className="content-servico">
            <div>
              <img src={serviçosIgm} alt="serviços" width="200" />
              <h3>Solicite um serviço</h3>
              <p>
                <i>
                  É facil. Basta solicitar um serviço que você precisa e receber
                  reposta de um profissional.
                </i>
              </p>
            </div>

            <div>
              <img src={negociarImg} alt="Negociar" width="112" />
              <h3>Negocie com o profissional</h3>
              <p>
                <i>Negocie direto com o profissional.</i>
              </p>
            </div>
          </div>
        </div>

        <div className="dif">
          <h2>Diferenciais</h2>

          <div className="conteiner-grid2">
            <div>
              <h3 className="h3">Suporte</h3>
              <p className="p">
                <i>Você terá suporte após conclusão do serviço.</i>
              </p>
            </div>
            <div>
              <h3 className="h3">Pague pela qualidade</h3>
              <p className="p">
                <i>Pague quando estiver concluído.</i>
              </p>
            </div>
            <div>
              <h3 className="h3">Dúvidas</h3>
              <p className="p">
                <i>
                  Você esqueceu a senha de seu equipamentoou teve algum
                  problema? Podemos tirar sua dúvida basta clicar no link
                  abaixo.
                </i>
              </p>
              <a href="#">Dúvida</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="div1">
          <h5>Serviços</h5>
          <a href="#">Dúvidas</a>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="div2">
          <h5>Informações</h5>
          <a href="#">Política de privacidade</a>
          <ul>
            <li>
              <a href="#">Termos & condições</a>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
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

export default Home;
