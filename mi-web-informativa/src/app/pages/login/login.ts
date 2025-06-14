import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `
    <section class="login-container">
      <form (submit)="onSubmit($event)" class="login-form">
        <img src="logo.png" alt="Logo Roy" class="logo" />
        <h2>Iniciar Sesión</h2>

        <label>
          Usuario:
          <input type="text" name="usuario" required />
        </label>

        <label>
          Contraseña:
          <input type="password" name="contrasena" required />
        </label>

        <div class="buttons">
          <button type="submit">Ingresar</button>
          <button type="button" (click)="onForgotPassword()">Olvidé mi contraseña</button>
          <button type="button" (click)="onCancel()">Cancelar</button>
        </div>
      </form>
    </section>
  `,
  styles: [`
    .login-container {
      height: 100vh;
      background-image: url('/img/Fondo.jpg'); /* Cambia por el path correcto */
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    h2{
      text-align: center;
      
    }
    .logo {
        height: 150px;
                 }

    .login-form {
      background-color: rgba(255, 255, 255, 0.78);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(3, 2, 65, 0.3);
      width: 320px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    label {
      font-weight: bold;
      font-family: 'Segoe UI', sans-serif;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.3rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 1rem;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      gap: 0.5rem;
    }

    button {
      flex: 1;
      padding: 0.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      font-family: 'Segoe UI', sans-serif;
      transition: background-color 0.2s ease;
    }

    button[type="submit"] {
      background-color: #015aee;
      color: white;
    }

    button[type="submit"]:hover {
      background-color: #0043bb;
    }

    button[type="button"] {
      background-color: #ccc;
    }

    button[type="button"]:hover {
      background-color: #aaa;
    }
  `]
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();
    // Aquí validas usuario y contraseña (puedes agregar lógica)
    alert('Intentando iniciar sesión...');
  }

  onForgotPassword() {
    alert('Función para recuperar contraseña pendiente');
    // Aquí podrías redirigir o mostrar un modal
  }

  onCancel() {
    this.router.navigate(['/inicio']);
  }
}
