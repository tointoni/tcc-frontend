import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import logoImg from "../../img/logo.png";
import './duvidas.css'

export default function Duvidas() {
  return (
    <div>
      <div className="conteiner-header-duvidas">
        <div className="conteiner-header-div">
          <img src={logoImg} alt="Técnicos 24H" width="60" />
          <h4>TECNICO24H</h4>
        </div>

        <div className="conteiner-div-duvidas">
          <div className="div-header-duvidas">
            <strong>Ta com dúvidas de algo?</strong>
            <p>Aqui pode ter a sua resposta.</p>
          </div>

          <div className="div-main-duvidas">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Recuperação de senha dos DVRs Intelbras</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Para garantir a segurança de nossos sistemas de CFTV, não é
                  permitido resetar a senha de usuário administrador dos
                  gravadores de vídeo Intelbras. Em caso de perda da senha, você
                  pode recuperá-la através de perguntas de segurança ou do
                  e-mail pré-configurado no produto. Esse recurso está
                  disponível para gravadores da linha Multi-HD® (consulte o
                  manual de seu produto no site da Intelbras para mais
                  informações). Caso não se lembre das perguntas de segurança,
                  não tenha acesso ao e-mail cadastrado ou tenha um gravador
                  Intelbras que não seja da linha Multi-HD®, você pode
                  encaminhar o produto para assistência técnica ou solicitar uma
                  nova senha à Intelbras.<br/>
                  Esse procedimento não é válido para os
                  modelos de gravador NVD 3116, NVD 3116 P, NVD 7132, NVD 11xx,
                  NVD 13xx e NVD 5124. Se você tem um desses modelos, precisará
                  encaminhar o gravador para uma de nossas assistências.
                </Typography>
              </AccordionDetails>
            </Accordion>
          
          </div>
        </div>
      </div>
    </div>
  );
}
