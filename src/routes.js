import React from  'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import home from './pages/home/home';

import cadastro from './pages/cadastro/cad';
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
import ResetPassword from './pages/resetsenha/resetpassword';



const Routes = () => 
    (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={home}/>

                <Route path="/cadastro"  component={cadastro} />

                <Route path="/client-signup"  component={cadclient}/>
                <Route path="/company-signup"  component={cadcompany} />

                <Route path="/sign-client"  component={loginclient} />
                <Route path="/sign-company" component={logincommpany} />
                <Route path="/reset-password" component={ResetPassword} />

                <Route path="/dashclient"  component={ListaServicos} />
                <Route path="/dashcommpany" component={dashcommpany} />

                <Route path="/perfilclient/edit"  component={EditClient}/>     
                <Route path="/perfilcompany/edit"  component={editcompany} />

                <Route path="/perfilclient"  component={perfilclient} />
                <Route path="/perfilcompany"  component={perfilcompany} />
                <Route path="/perfil" component={showperfil} />

                <Route path="/list-service"  component={Listatudo} />
                <Route path="/updateservice" component={Upadate} />

                <Route path="/" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );

export default Routes;