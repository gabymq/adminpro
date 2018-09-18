import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromesasComponent } from "./promesas/promesas.component";
import { RxjsComponent } from "./rxjs/rxjs.component";




const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard', description: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress', description: 'ProggresBar'} },
      { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas', description: 'Gráficas'} },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas', description: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs', description: 'RxJs'} },

      { path: 'account-settings', component: AccountSettingsComponent,
      data: { titulo: 'Ajustes del tema', description: 'Ajustes del Tema'} },

      // la ruta cuando no exite ninguna ruta, se redirecciona al dashboard
      { path: 'l', redirectTo: '/dashboard', pathMatch: 'full' },
   ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
