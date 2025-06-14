import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  template: `
    <section class="about">
      <div class="container">
        <div class="text-content">
          <h2>¿Quiénes Somos?</h2>
          <p>
            Gracias a nuestra avanzada planta de producción, en Calzado Roy podemos desarrollar 
            productos originales, modernos y adaptables a las exigencias del mercado.
            Nuestra fabrica se dedica 100% a la producción de calzado de cuero el cual hace que nuestro 
            producto sea excelente en todos los aspectos: Durabilidad, confort y moda. Estos componentes
             nos ayudan a tener un producto de talla mundial a precios accesibles para todos nuestros consumidores.
             Contamos con variedad de estilos para cualquier miembro de la familia, ya sea bebe, niña, niño, joven,
              dama o caballero. No solo contamos con calzado para toda la familia, si no también con calzado para
               las distintas líneas de necesidad como bota de trabajo, zapato casual y de zapato vestir.
          </p>
        </div>
        <div class="image-content">
          <img src="logo.png" alt="Fábrica Roy">
        </div>
      </div>
    </section>

    <section class="values">
      <div class="value">
        <h3>Nuestra Misión</h3>
        <p>
        Calzar a la población centroamericana y del Caribe, ofreciendo producto
        s de calidad, a precios accesibles y con un buen servicio al cliente <br>
        Calzar a un tercio de la población centroamericana y del Caribe, brindando el mejor 
        servicio al cliente de la industria y proporcionando el producto con la mejor 
        relación calidad precio <br>
        Calzar a un tercio de la población centroamericana y del Caribe, brindando el mejor 
        servicio al cliente de la industria y proporcionando el producto con la mejor relación 
        calidad-precio        </p>
      </div>
      <div class="value">
        <h3>Nuestra Visión</h3>
        <p>
        Crear zapatos de calidad excepcional que brinden comodidad y estilo a nuestros clientes. 
        Ser la empresa comercializadora de calzado número uno en la región. Con presencia en el mercado
         centroamericano y del Caribe.        </p>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 4rem 2rem;
      background-color:rgb(255, 255, 255);
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }

    .text-content {
      flex: 1;
      min-width: 300px;
      max-width: 600px;
    }

    .text-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #2c2c2c;
    }

    .text-content p {
      font-size: 1.1rem;
      line-height: 1.7;
      font-family: 'Segoe UI', sans-serif;
      color: #333;
    }

    .image-content img {
      width: 100%;
      max-width: 500px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .values {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      background-color:rgb(223, 223, 223);
      padding: 4rem 2rem;
      text-align: center;
    }

    .value h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: rgb(1, 9, 53);
    }

    .value p {
      font-size: 1rem;
      line-height: 1.6;
      font-family: 'Segoe UI', sans-serif;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }

      .text-content, .image-content {
        max-width: 100%;
      }
    }
  `]
})
export class NosotrosComponent {}
