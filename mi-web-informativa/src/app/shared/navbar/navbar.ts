import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="logo">
  <img src="logo.png" alt="Logo Roy" />
</div>
      <ul class="nav-links">
        <li><a routerLink="/inicio" routerLinkActive="active">Inicio</a></li>
        <li><a routerLink="/nosotros" routerLinkActive="active">Nosotros</a></li>
        <li><a routerLink="/lineas-produccion" routerLinkActive="active">Producción</a></li>
        <li><a routerLink="/contactenos" routerLinkActive="active">Contáctenos</a></li>
        <li><a routerLink="/login" routerLinkActive="active">Iniciar Sesión</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color:rgb(202, 202, 200);
      padding: 1rem 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

 .logo img {
  height: 100px;
  object-fit: contain;
}

    .nav-links {
      list-style: none;
      display: flex;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      font-family: 'Segoe UI', sans-serif;
      color:rgb(0, 15, 65);
      text-decoration: none;
      font-weight: 1000;
      font-size: 1.5rem;
      transition: color 0.2s ease;
    }

 .nav-links li:hover,
.nav-links li:has(a.active) {
  background-color: rgb(0, 15, 65);
    border-radius: 8px; /* <-- opcional pero recomendable para asegurar uniformidad */
}

.nav-links a {
  font-family: 'Segoe UI', sans-serif;
  color: rgb(0, 15, 65);
  text-decoration: none;
  font-weight: 1000;
  font-size: 1.5rem;
  transition: color 0.2s ease;
  display: block;
  padding: 1.2rem 1rem; /* Aumenta el área clickeable */
}

.nav-links li:hover a,
.nav-links li:has(a.active) a {
  color: white;
}

.nav-links li {
  display: flex;
  align-items: center;
  border-radius: 8px; /* <-- esquinas redondeadas */
  transition: background-color 0.2s ease;
}
    @media (max-width: 768px) {
      .nav-links {
        flex-direction: column;
        gap: 0.8rem;
      }
    }
  `]
})
export class NavbarComponent {}
