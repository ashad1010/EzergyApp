
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GetApiService } from './get-api.service';

//import { InfiniteScrollCustomEvent } from '@ionic/angular';

/*
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  GoToDashboard() 
  {
    this.router.navigate(['/dashboard']);
  }
  GoToSettings() 
  {
    this.router.navigate(['/settings']);
  }
  GoToHome() 
  {
    this.router.navigate(['/home']);
  }
}
*/

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Heading = 1.11;

  items = [];

  constructor(private router: Router, private api:GetApiService) {}
  GoToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  GoToSettings() {
    this.router.navigate(['/settings']);
  }

  GoToHome() {
    this.router.navigate(['/home']);
  }


  ngOnInit()
  {
    this.api.apiCall().subscribe((data: any)=>{
      console.warn("Blynk data retrieved:", data);
      this.Heading=data;
    })
  }
  

  }

