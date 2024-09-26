import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AqmLoginPageRoutingModule } from './aqm-login-routing.module';

import { AqmLoginPage } from './aqm-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AqmLoginPageRoutingModule
  ],
  declarations: [AqmLoginPage]
})
export class AqmLoginPageModule {}
