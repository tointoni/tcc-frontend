import React from  'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import home from './pages/home/home';

import cadclient from './pages/cadastro/cadclient';
import cadcompany from './pages/cadastro/cadcompany';

import loginclient from './pages/login/loginclient';
import logincommpany from './pages/login/logincommpany';

import dashcommpany from './pages/dashboard/dashcommpany'

import editcompany from './pages/alteradados/editcompany';
import EditClient from './pages/alteradados/editclient';

import perfilclient from './pages/perfil/perfilclient';
import perfilcompany from './pages/perfil/perfilcompany';
import showperfil from './pages/perfil/showperfil';

import ListaServicos from './pages/os/listaservicos';

import NotFound from './pages/notfound';

import Listatudo from './pages/os/listatudo';

import Upadate from './pages/os/updateos';

import resetclient from './pages/resetsenha/resetclient';
import resetcommpany from './pages/resetsenha/resetcompany';
import updatepasswordCliente from './pages/resetsenha/update/updateclient';
import updatepasswordCommpany from './pages/resetsenha/update/updatecommpany';

import Duvidas from './pages/conteudo/duvidas';
import Privacidade from './pages/conteudo/privacidade';


import Teste from './pages/teste';

const Routes = () => 
    (
        <BrowserRouter>
            <Switch>
                <Route path="/teste" exact component={Teste}/>

                <Route path="/" exact component={home}/>

                <Route path="/client-signup"  component={cadclient}/>
                <Route path="/company-signup"  component={cadcompany} />

                <Route path="/sign-client"  component={loginclient} />
                <Route path="/sign-company" component={logincommpany} />
           
                <Route path="/reset-password-client" exact component={resetclient} />
                <Route path="/reset-password-commpany" exact component={resetcommpany} />

                <Route path="/update-password-client" exact component={updatepasswordCliente} />
                <Route path="/update-password-commpany" exact component={updatepasswordCommpany} />

                <Route path="/dashclient"  component={ListaServicos} />
                <Route path="/dashcommpany" component={dashcommpany} />

                <Route path="/perfilclient/edit"  component={EditClient}/>     
                <Route path="/perfilcompany/edit"  component={editcompany} />

                <Route path="/perfilclient"  component={perfilclient} />
                <Route path="/perfilcompany"  component={perfilcompany} />
                <Route path="/perfil" component={showperfil} />

                <Route path="/list-service"  component={Listatudo} />
                <Route path="/updateservice" component={Upadate} />

                <Route path="/duvidas" component={Duvidas} />
                <Route path="/privacidade" component={Privacidade} />

                <Route path="/" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );

export default Routes;