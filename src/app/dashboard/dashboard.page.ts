/*
import Chart from 'chart.js/auto';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements AfterViewInit {


  constructor(private router: Router) {}

  GoToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  GoToSettings() {
    this.router.navigate(['/settings']);
  }

  GoToHome() {
    this.router.navigate(['/home']);
  }

  @ViewChild('myChart') myChart: any;
  chart: any;

  ngAfterViewInit() {
    this.chart = new Chart(this.myChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Electricity Usage',
          data: [65, 59, 80, 81, 56, 55, 40], // Sample data
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
*/

import Chart from 'chart.js/auto';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiService } from '../home/get-api.service'; // Import your API service

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements AfterViewInit {

  constructor(private router: Router, private apiService: GetApiService) {} // Inject your API service

  GoToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  GoToSettings() {
    this.router.navigate(['/settings']);
  }

  GoToHome() {
    this.router.navigate(['/home']);
  }

  @ViewChild('myChart') myChart: any;
  chart: any;

  ngAfterViewInit() {
    this.apiService.apiCall().subscribe((data: any) => { // Fetch data from API
      const value = data.body; // Assuming your API returns the value directly, adjust accordingly if not
      this.chart = new Chart(this.myChart.nativeElement, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Electricity Usage',
            data: [value], // Use fetched value for all data points
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: { 
              beginAtZero: true
            }
          }
        }
      });
    });
  }
}



/*
import { Component, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements AfterViewInit, OnDestroy {
  constructor(private router: Router, private http: HttpClient) {}

  GoToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  GoToSettings() {
    this.router.navigate(['/settings']);
  }

  GoToHome() {
    this.router.navigate(['/home']);
  }

  @ViewChild('myChart') myChart: any;
  chart: any;
  dataSubscription!: Subscription;

  ngAfterViewInit() {
    this.chart = new Chart(this.myChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Electricity Usage',
          data: [65, 59, 80, 81, 56, 55, 40], // Sample data
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });


    // Start fetching data every 5 seconds
    this.dataSubscription = interval(5000)
      .subscribe(() => {
        this.fetchDataFromBlynk();
      });
  }

  ngOnDestroy() {
    // Unsubscribe from the data subscription when the component is destroyed
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  fetchDataFromBlynk() {
    // Make an HTTP request to the Blynk API
    const apiUrl = 'https://blynk.cloud/external/api/get?token=JvQFJtdavohU5BTFohxC8E9eKfz1Vsq1&dataStreamId=4';

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        // Assuming the response contains a property 'value' with the data you want to display
        const blynkData = response.value;

        // Update your chart or any other part of your dashboard with the fetched data
        this.updateChart(blynkData);
      },
      (error) => {
        console.error('Error fetching data from Blynk API:', error);
      }
    );
  }

  updateChart(blynkData: any) {
    // Update your chart with the fetched data
    // Assuming you have a chart property named 'chart' in your component
    this.chart.data.datasets[0].data = blynkData;
    this.chart.update();
  }
}
*/

