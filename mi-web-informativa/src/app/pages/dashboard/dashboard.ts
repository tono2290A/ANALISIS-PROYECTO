import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-layout">
      <aside class="sidebar">
        <div class="logo">Calzado Roy</div>
        <nav>
          <a routerLink="/dashboard/diseno" routerLinkActive="active">
            <img src="/icons/Diseno.svg" alt="Diseño" /> Diseño
          </a>
          <a routerLink="/dashboard/proveedores" routerLinkActive="active">
            <img src="/icons/Proveedor.svg" alt="Proveedores" /> Proveedores
          </a>
          <a routerLink="/dashboard/materiales" routerLinkActive="active">
            <img src="/icons/Materiales.svg" alt="Materiales" /> Materiales
          </a>
          <a routerLink="/dashboard/montaje" routerLinkActive="active">
            <img src="/icons/Warehouse.svg" alt="Montaje" /> Montaje
          </a>
          <a routerLink="/dashboard/calidad" routerLinkActive="active">
            <img src="/icons/checklist.svg" alt="Calidad" /> Control de Calidad
          </a>
          <a routerLink="/dashboard/embalaje" routerLinkActive="active">
            <img src="/icons/Magic.svg" alt="Embalaje" /> Embalaje
          </a>
          <a routerLink="/dashboard/usuarios" routerLinkActive="active">
            <img src="/icons/user.svg" alt="Usuarios" /> Usuarios
          </a>
          <a routerLink="/dashboard/reportes" routerLinkActive="active">
            <img src="/icons/Database.svg" alt="Reportes" /> Reportería
          </a>
          <a routerLink="/inicio">
            <img src="/icons/user.svg" alt="Salir" /> Cerrar sesión
          </a>
        </nav>
      </aside>

      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .dashboard-layout {
      display: flex;
      height: 100vh;
    }

    .sidebar {
      width: 240px;
      background-color:rgba(1, 9, 53, 0.93);
      color: #fff;
      display: flex;
      flex-direction: column;
      padding: 2rem 1rem;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 2rem;
      text-align: center;
      color: #f1c40f;
    }

    nav a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: #fff;
      text-decoration: none;
      padding: 0.6rem 1rem;
      border-radius: 5px;
      transition: background 0.3s;
      font-size: 0.95rem;
      margin-bottom: 0.3rem;
    }

    nav a:hover,
    nav a.active {
      background-color: rgba(255, 255, 255, 0.1);
    }

    nav img {
      width: 20px;
      height: 20px;
    }

    .content {
      flex-grow: 1;
      padding: 2rem;
      
        background-size: cover;
      background-position: center;
      overflow-y: auto;
      
    }

    .content::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('/img/Fondo.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.3; /* Cambia esto según la opacidad deseada */
  z-index: -1;
  pointer-events: none; /* Permite hacer clic en el contenido */
}
 
    @media (max-width: 768px) {
      .dashboard-layout {
        flex-direction: column;
      }

      .sidebar {
        flex-direction: row;
        overflow-x: auto;
        width: 100%;
        height: auto;
      }

      nav {
        display: flex;
        flex-wrap: nowrap;
        gap: 0.5rem;
      }

      nav a {
        flex-direction: column;
        font-size: 0.75rem;
        padding: 0.4rem;
      }
    }
  `]
})
export class DashboardComponent {}
