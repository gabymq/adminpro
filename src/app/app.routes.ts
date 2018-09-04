import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';



const appRuotes: Routes = [
  // {
  //   path: '',
  //   component: PagesComponent,
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'progress', component: ProgressComponent },
  //     { path: 'graficas1', component: Graficas1Component },
  //     // la ruta cuando no exite ninguna ruta, se redirecciona al dashboard
  //     { path: 'l', redirectTo: '/dashboard', pathMatch: 'full' },
  // ]
  // },
  // {
  //   path: '',
  //   component: LoginComponent,
  //   children: [

  //   ]
  // },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // cuando no encuentre la futa vamos a poner la pagina que pusimos nopagefound
  { path: '**', component: NopagefoundComponent }


];

export const APP_ROUTES = RouterModule.forRoot( appRuotes, { useHash: true });
