import Chart from 'chart.js/auto';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetApiService } from '../home/get-api.service'; // Adjust the path as necessary

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements AfterViewInit {
  @ViewChild('myChart') myChart: any;
  chart: any;

  constructor(private router: Router, private apiService: GetApiService) {}

  GoToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  GoToSettings() {
    this.router.navigate(['/settings']);
  }

  GoToHome() {
    this.router.navigate(['/home']);
  }

  ngAfterViewInit() {
    this.apiService.apiCall().subscribe((data: any) => {
      // Assuming 'data' is your single double value
      // Here, we're adding the new value to the end of an existing dataset
      // and removing the first value to keep the dataset size constant.
      // This creates a "sliding window" effect of the latest N values.
      if (this.chart) {
        let currentData = this.chart.data.datasets[0].data;
        if (currentData.length > 6) { // Assuming you want to keep 7 data points
          currentData.shift(); // Remove the first element
        }
        currentData.push(data); // Add the new value
        this.chart.update();
      } else {
        // If the chart doesn't exist yet, initialize it with the single value
        this.initializeChart([data]); // Pass the single value in an array
      }
    });
  }

  initializeChart(initialData: any[]) {
    this.chart = new Chart(this.myChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // Adjust if needed
        datasets: [{
          label: 'Electricity Usage',
          data: initialData, // Initialize with the provided data
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
