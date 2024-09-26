import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AqmParticipantesPageRoutingModule } from './aqm-participantes-routing.module';

import { AqmParticipantesPage } from './aqm-participantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AqmParticipantesPageRoutingModule
  ],
  declarations: [AqmParticipantesPage]
})
export class AqmParticipantesPageModule {}
