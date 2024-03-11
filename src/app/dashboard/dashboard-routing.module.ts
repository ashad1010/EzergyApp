import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';

/*
const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
*/
@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: DashboardPage }])],
  //declarations: [LibraryPageComponent],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
