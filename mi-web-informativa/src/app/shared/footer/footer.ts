import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-grid">
        
        <!-- Redes Sociales -->
        <div class="footer-column">
          <h4>Síguenos</h4>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <img src="/icons/Fac.svg" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <img src="/icons/Ins.png" alt="Instagram" />
            </a>
            <a href="https://wa.me/50223243500" target="_blank" aria-label="WhatsApp">
              <img src="/icons/What.svg" alt="WhatsApp" />
            </a>
          </div>
        </div>

        <!-- Derechos -->
        <div class="footer-column">
          <h4>&copy; 2025 Calzado Roy</h4>
          <p>Todos los derechos reservados.</p>
        </div>

        <!-- Contacto -->
        <div class="footer-column">
          <h4>Contacto</h4>
          <p>Tel: (502) 2324 3500</p>
          <p>Gmail: contactocalzadoroy.com</p>
          <p>Lugar: Ciudad de Guatemala</p>
        </div>

      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: rgba(3, 11, 54, 0.94);
      color: white;
      padding: 3rem 1rem;
      font-family: 'Segoe UI', sans-serif;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 2rem;
      max-width: 1100px;
      margin: 0 auto;
      text-align: center;
    }

    .footer-column h4 {
      margin-bottom: 0.8rem;
      font-size: 1.2rem;
      color: #f0f0f0;
    }

    .footer-column p {
      margin: 0.3rem 0;
      font-size: 0.95rem;
      color: #ccc;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 0.5rem;
    }

    .social-icons img {
      width: 40px;
      height: 40px;

      transition: transform 0.2s ease;
    }

    .social-icons a:hover img {
      transform: scale(1.1);
    }

    @media (max-width: 600px) {
      .footer-grid {
        text-align: center;
      }

      .social-icons {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {}
