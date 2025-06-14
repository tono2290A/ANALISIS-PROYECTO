import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="contacto">
      <h2>Contáctenos</h2>

      <div class="grid">
        <!-- Información -->
        <div class="info">
          <h3>Información de Contacto</h3>
            <div class="info-block">
              <div class="icon">
                <img src="/icons/Headquarter.svg" alt="Dirección" width="30" height="30" />
              </div>
              <p><strong>Cuidad Guatemala,Guatemala</strong><br>
               5 Avenida 11-24, Mixco 01057, Guatemala</p>
            </div>

            <div class="info-block">
              <div class="icon">
                <img src="/icons/Call.svg" alt="Dirección" width="30" height="30" />
              </div>
              <p><strong>+(502) 2324 3500</strong><br>
            Lunes a Viernes, 8am a 5pm</p>
            </div>

            <div class="info-block">
              <div class="icon">
                <img src="/icons/mail.svg" alt="Dirección" width="30" height="30" />
              </div>
              <p><strong>www.calzadoroy.com</strong></p>
            </div>
          
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61764.79505116166!2d-90.62624338713131!3d14.638921945902727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a17da3db6b11%3A0x8acee0ca37a4cf91!2sCalzado%20Roy!5e0!3m2!1ses-419!2ssv!4v1749793562666!5m2!1ses-419!2ssv" 
        width="500" height="450" style="border:0;" allowfullscreen=""
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <!-- Formulario -->
        <form class="formulario">
          <label>
            Nombre:
            <input type="text" name="nombre" required>
          </label>

          <label>
            Correo:
            <input type="email" name="correo" required>
          </label>

          <label>
            Mensaje:
            <textarea rows="5" name="mensaje" required></textarea>
          </label>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  `,
  styles: [`
    .contacto {
      padding: 4rem 2rem;
      background-color: #f5f5f5;
      text-align: center;
    }

    .contacto h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: rgb(1, 9, 53);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      text-align: left;
      max-width: 1000px;
      margin: 0 auto;
    }

    .info p {
      margin: 0.5rem 0;
      font-size: 1rem;
    }

    .info-block {
  margin-bottom: 2rem;

}

.icon {
  margin-bottom: 0.5rem;
  
}

    .formulario {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background: #fff;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    .formulario label {
      display: flex;
      flex-direction: column;
      font-weight: bold;
      color: #333;
    }

    .formulario input,
    .formulario textarea {
      margin-top: 0.3rem;
      padding: 0.7rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-family: 'Segoe UI', sans-serif;
    }

    .formulario button {
      background-color: rgb(1, 9, 53);
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
      align-self: flex-start;
    }

    .formulario button:hover {
      background-color: #2c3e50;
    }
  `]
})
export class ContactenosComponent {}
