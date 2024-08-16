import { Component } from '@angular/core';
import { DataService } from '../http.service';
import { Router } from '@angular/router';
import { UtilitiesComponent } from './utilities/utilities.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {

  constructor(private dataService: DataService,private router: Router,private utilitiesComponent:UtilitiesComponent) { }

  electricClicked() {
    this.dataService.setUtilityType('electric');
    this.router.navigate(['/utilities']);
  }

  waterClicked() {
    this.dataService.setUtilityType('water');
    this.router.navigate(['/utilities']);
  }
}
