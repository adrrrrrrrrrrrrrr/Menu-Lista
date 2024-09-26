import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AqmLoginPage } from './aqm-login.page';

const routes: Routes = [
  {
    path: '',
    component: AqmLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AqmLoginPageRoutingModule {}
