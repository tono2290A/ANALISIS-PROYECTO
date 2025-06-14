import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar';
import { FooterComponent } from './shared/footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  template: `
    <ng-container *ngIf="!esLoginODashboard">
      <app-navbar></app-navbar>
    </ng-container>

    <main>
      <router-outlet></router-outlet>
    </main>

    <ng-container *ngIf="!esLoginODashboard">
      <app-footer></app-footer>
    </ng-container>
  `
})
export class AppComponent {
  get esLoginODashboard(): boolean {
    const ruta = location.pathname;
    return ruta.startsWith('/dashboard') || ruta === '/login';
  }
}