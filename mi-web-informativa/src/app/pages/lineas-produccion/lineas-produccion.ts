import { Component } from '@angular/core';

@Component({
  selector: 'app-lineas-produccion',
  standalone: true,
  template: `
    <section class="lineas">
      <h2>Nuestras Líneas de Producción</h2>
      <p> 4900 metros cuadrados. Taller de Mantenimiento. Bodega con capacidad para más de 200 mil pares.</p>
      <div class="grid">
        <div class="card">
          <img src="/img/corte.jpg" alt="Corte">
          <h3>Corte</h3>
          <p>Diseñados para brindar comodidad y resistencia en actividades físicas, ideales para deporte o 
            uso diario activo.</p>
        </div>

        <div class="card">
          <img src="/img/inyectado.jpg" alt="Inyectado">
          <h3>Inyectado</h3>
          <p>Los equipos de inyectado cuentan con capacidad de producción de 1600 pares diarios.</p>
        </div>

        <div class="card">
          <img src="/img/prep.jpg" alt="Preparación y Serigrafía">
          <h3>Preparación y Serigrafía</h3>
          <p>La capacidad de preparación y serigrafia es de 482 Piezas días las cuales son utilizadas para
             la comercialización de producto final.</p>
        </div>

        <div class="card">
          <img src="/img/montado.jpg" alt="Montado">
          <h3>Montado</h3>
          <p>La línea de montado es capaz de producir 2400 pares diarios.</p>
        </div>

        <div class="card">
          <img src="/img/acabado.jpg" alt="Acabado">
          <h3>Acabado</h3>
          <p>Se coloca la capellada sobre una horma específica, esta envolverá a la horma, tomando su 
            forma y se procede a fijar la suela al montado..</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .lineas {
      padding: 4rem 2rem;
      background-color: #fff;
      text-align: center;
    }

    .lineas h2 {
      font-size: 2.5rem;
      color: #1f1f1f;
      margin-bottom: 2rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 2rem;
    }

    .card {
      background: #f9f9f9;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 1rem;
    }

    .card h3 {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: rgb(1, 9, 53);
    }

    .card p {
      font-size: 1rem;
      font-family: 'Segoe UI', sans-serif;
      color: #444;
    }
  `]
})
export class LineasProduccionComponent {}
