import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },*/
  {
    path: '',
    redirectTo: 'aqm-login',
    pathMatch: 'full'
  },
  {
    path: 'aqm-login',
    loadChildren: () => import('./aqm-login/aqm-login.module').then( m => m.AqmLoginPageModule)
  },
  {
    path: 'aqm-participantes',
    loadChildren: () => import('./aqm-participantes/aqm-participantes.module').then( m => m.AqmParticipantesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
