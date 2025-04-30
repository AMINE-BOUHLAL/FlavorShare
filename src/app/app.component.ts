import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {AccueilComponent} from './accueil/accueil.component';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, AccueilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Flavor-Share';
}
