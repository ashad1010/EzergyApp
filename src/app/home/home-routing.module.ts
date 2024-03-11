import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';

import { IonicModule } from '@ionic/angular';


/*
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
*/

@NgModule({
  imports: [IonicModule, RouterModule.forChild([{ path: '', component: HomePage }])],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
