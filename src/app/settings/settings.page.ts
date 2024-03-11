/*
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

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

  ngOnInit() {
  }
}
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  electricityRate: number | undefined;
  waterRate: number | undefined;
  pastBillCost: number | undefined;
  electricityConsumed: number | undefined;
  waterConsumed: number | undefined;
  currentElectricityCost: number | undefined;
  currentWaterCost: number | undefined;
  savings: number | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    // Load saved settings if any
    this.loadSettings();
  }

  saveSettings() {
    console.log('Saving settings...');
    // Save settings to local storage or database
    if (this.electricityRate !== undefined) {
      localStorage.setItem('electricityRate', this.electricityRate.toString());
    }
    if (this.waterRate !== undefined) {
      localStorage.setItem('waterRate', this.waterRate.toString());
    }
    if (this.pastBillCost !== undefined) {
      localStorage.setItem('pastBillCost', this.pastBillCost.toString());
    }

    // Calculate current costs and savings
    this.calculateCostsAndSavings();
  }

  loadSettings() {
    // Load settings from local storage or database
    const savedElectricityRate = localStorage.getItem('electricityRate');
    if (savedElectricityRate) {
      this.electricityRate = parseFloat(savedElectricityRate);
    }

    const savedWaterRate = localStorage.getItem('waterRate');
    if (savedWaterRate) {
      this.waterRate = parseFloat(savedWaterRate);
    }

    const savedPastBillCost = localStorage.getItem('pastBillCost');
    if (savedPastBillCost) {
      this.pastBillCost = parseFloat(savedPastBillCost);
    }
  }

  calculateCostsAndSavings() {
    console.log('Calculating costs and savings...');
    if (this.electricityRate !== undefined && this.waterRate !== undefined && this.pastBillCost !== undefined
      && this.electricityConsumed !== undefined && this.waterConsumed !== undefined) {
      // Calculate current electricity and water costs
      this.currentElectricityCost = this.electricityRate * this.electricityConsumed;
      this.currentWaterCost = this.waterRate * this.waterConsumed;

      // Calculate total current cost
      const totalCurrentCost = (this.currentElectricityCost || 0) + (this.currentWaterCost || 0);

      // Calculate savings
      this.savings = (this.pastBillCost || 0) - totalCurrentCost;
    }
  }

  GoToHome() {
    this.router.navigate(['/home']);
  }

  GoToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  GoToSettings() {
    this.router.navigate(['/settings']);
  }
}
