import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  template: `
    <!-- Hero / Portada -->
    <section class="hero">
      <div class="overlay">
        <div class="text">
          <h1>Bienvenido a</h1>
          <img src="logo.png" alt="Logo Roy" class="logo" />
          <p>Calzado de calidad hecho con pasión.</p>
        </div>
      </div>
    </section>

    <!-- Sección de características -->
    <section class="features">
      <div class="feature">
        <div class="icon">🎨</div>
        <h3>Diseños</h3>
        <p>
          Poseemos un experimentado equipo de desarrollo, diseñando todos los elementos necesarios para la fabricación de calzados en base a gustos y tendencias del mercado regional.
        </p>
      </div>

      <div class="feature">
        <div class="icon">🏭</div>
        <h3>Manufactura</h3>
        <p>
        Contamos con mano de obra calificada y una capacidad de producción que cubre todas las etapas de
         desarrollo. Fabricamos nuestros componentes y disponemos de todas las lineas de producción de 
         calzado de cualquier tipo.        </p>
      </div>

      <div class="feature">
        <div class="icon">🛒</div>
        <h3>Comercialización</h3>
        <p>
      Nuestra sólida experiencia nos lleva a contar con 8 zapaterias a nivel nacional; comercializando nuestros 
      productos al detalle, al mayoreo y comercio electrónico.        </p>
      </div>
    </section>
  `,
  styles: [`
    /* Hero */
    .hero {
      background-image: url('/img/hero.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 90vh;
      position: relative;
      color: white;
    }

    .overlay {
      background-color: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .text {
      padding: 2rem;
    }

    .text h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .logo {
      height: 120px;
      margin: 1rem 0;
    }

    .text p {
      font-size: 1.2rem;
      margin-top: 1rem;
    }

    @media (max-width: 768px) {
      .text h1 {
        font-size: 2rem;
      }

      .text p {
        font-size: 1rem;
      }

      .logo {
        height: 80px;
      }
    }

    /* Features */
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 4rem 2rem;
      background-color: #f5f5f5;
      color: #333;
    }

    .feature {
      background: white;
      border-radius: 10px;
      padding: 2rem;
      text-align: center;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    .feature .icon {
      font-size: 5rem;
      margin-bottom: 1rem;
    }

    .feature h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color:rgb(1, 9, 53);
    }

    .feature p {
      font-size: 1rem;
      line-height: 1.6;
      font-family: 'Segoe UI', sans-serif;
    }
  `]
})
export class InicioComponent {}
