import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cartelera } from './cartelera/cartelera';
import { Estrenos } from './estrenos/estrenos';
import { Contacto } from './contacto/contacto';
import { Comprarboletas } from './comprarboletas/comprarboletas';


export const routes: Routes = [
    {path: '', component: Home},
    {path: 'cartelera', component: Cartelera},
    {path: 'estrenos', component: Estrenos},
    {path: 'contacto', component: Contacto},
    {path: 'comprarboletas', component: Comprarboletas}


];
