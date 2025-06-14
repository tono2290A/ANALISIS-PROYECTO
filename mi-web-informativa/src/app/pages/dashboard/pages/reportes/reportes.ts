import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="contenedor">
      <img src="img/A.png" alt="planos" class="imagen"><br>
      <div class="contenido">
        <h1>En construcción</h1>
        <p>Esta sección se encuentra en construcción y está siendo preparada para incluir las funcionalidades correspondientes.</p>
        <p>Muy pronto estará disponible para que puedas utilizar todas sus herramientas.</p>
      </div>
    </div>
  `,
  styles: [`
    .contenedor {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      text-align: center;
    }

    .contenido {
      max-width: 600px;
      color: #333;
    }

    .contenido h1 {
      color: #0c355d;
      font-size: 2.5rem;
      margin-bottom: 1rem;
      border-top: 3px solid #eee;
      border-bottom: 3px solid #eee;
      padding: 0.5rem 0;
    }

    .contenido p {
      margin: 0.5rem 0;
      font-size: 1.1rem;
    }

    .imagen {
      width: 200px;
      height: auto;
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      .imagen {
        width: 120px;
      }
    }
  `]
})
export class ReportesComponent {}

