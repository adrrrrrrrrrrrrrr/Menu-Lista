import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AqmParticipantesPage } from './aqm-participantes.page';

const routes: Routes = [
  {
    path: '',
    component: AqmParticipantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AqmParticipantesPageRoutingModule {}
