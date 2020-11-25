import React from "react";

import logoImg from "../../img/logo.png";
import './privacidade.css';

export default function Privacidade() {
  return (
    <div>
      <div className="conteiner-header-privacidade">
        <div className="conteiner-header-div-privacidade">
          <img src={logoImg} alt="Técnicos 24H" width="60" />
          <h4>TECNICO24H</h4>
        </div>
      </div>

      <div className="container-main">
        <div className="main-section">
          <p>Nossa política de privacidade</p>
        </div>
        <div className="main-section">1. Sobre a coleta de dados</div>
        <div className="main-article">
          Informações fornecidas por você - Coletamos Informações de
          indentificação pessoal - como nome, telefone, e-mail, endereço, estado
          e CPF(para empresa é coletado o CNPJ). Esses dados são coletados no
          seu cadastro.
          <br />
          Informações de navegação no site - Quando você está logado no sistema
          é perguntado para pegar sua localização para que você possa solicitar
          um serviço no sistema.
        </div>

        <div className="main-section">2. Detalhes de coleta de dados via formulário</div>
        <div className="main-article">
            Coletamos somente o que foi citado acima somente no seu cadastro no sistema.
        </div>

        <div className="main-section">3. Finalidade do seu e-mail e telefone</div>
        <div className="main-article">
            Não utilizamos seu e-mail para envio de noticias sobre as novidades do site e nem para spam, somente caso você esqueça sua senha.<br/>
            Não ligaremos para seu telefone e não enviamos sms sobre o site.
        </div>

        <div className="main-section">4. compartilhamento de daods com terceiros</div>
        <div className="main-article">
            Não compartilhamos dados de usuários com terceiros.
        </div>

        <div className="main-section">5. Navegação anonima</div>
        <div className="main-article">
            Não gravamos registros de navegação anonima.
        </div>

        <div className="main-section">6. Formas de pagamentos</div>
        <div className="main-article">
            O sistema não tem formas de pagamento.
        </div>

        <div className="main-section">7. Hospedagem do site</div>
        <div className="main-article">
            O site é hospedado no <a href="https://www.salesforce.com/company/privacy/">heroku</a>.
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
