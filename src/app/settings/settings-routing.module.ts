
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SettingsPage } from './settings.page';


@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: SettingsPage }])],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}

