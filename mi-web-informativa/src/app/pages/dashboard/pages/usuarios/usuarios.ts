import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UsuarioService } from '../../../../servicios/usuario.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule,MatSnackBarModule],
  template: `
    <h2>Lista de Usuarios</h2>

    <!-- FORMULARIO -->
    <form (ngSubmit)="guardarUsuario()">
      <input [(ngModel)]="usuarioForm.nombre_completo" name="nombre_completo" placeholder="Nombre Completo" required />
      <input [(ngModel)]="usuarioForm.usuario" name="usuario" placeholder="Usuario" required />
            <input
        type="password"
        [(ngModel)]="usuarioForm.contrasena"
        name="contrasena"
        placeholder="Contraseña"
        [required]="!usuarioForm.id_usuario"
      />

      <input [(ngModel)]="usuarioForm.correo" name="correo" placeholder="Correo" required />
      <select [(ngModel)]="usuarioForm.estado" name="estado" required>
        <option value="activo">Activo</option>
        <option value="inactivo">Inactivo</option>
      </select>
      <button type="submit">{{ usuarioForm.id_usuario ? 'Actualizar' : 'Agregar' }}</button>
      <button type="button" (click)="cancelarEdicion()" *ngIf="usuarioForm.id_usuario">Cancelar</button>
    </form>

    <!-- TABLA -->
    <table class="usuarios-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre Completo</th>
          <th>Usuario</th>
          <th>Correo</th>
          <th>Fecha de Creación</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let usuario of usuarios">
          <td>{{ usuario.id_usuario }}</td>
          <td>{{ usuario.nombre_completo }}</td>
          <td>{{ usuario.usuario }}</td>
          <td>{{ usuario.correo }}</td>
          <td>{{ usuario.fecha_creacion | date:'short' }}</td>
          <td>
            <span [ngClass]="usuario.estado === 'activo' ? 'activo' : 'inactivo'">
              {{ usuario.estado }}
            </span>
          </td>
          <td>
            <button (click)="editarUsuario(usuario)">Editar</button>
            <button (click)="eliminarUsuario(usuario.id_usuario)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #0c355d;
    }
    form {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 1rem;
      justify-content: center;
    }
    form input, form select, form button {
      padding: 8px;
      font-size: 14px;
    }
    .usuarios-table {
      width: 100%;
      border-collapse: collapse;
      background-color: #fff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-radius: 8px;
      overflow: hidden;
    }
    .usuarios-table th,
    .usuarios-table td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid #eee;
    }
    .usuarios-table th {
      background-color: #0c355d;
      color: #fff;
      font-weight: bold;
    }
    .usuarios-table tr:hover {
      background-color:rgb(161, 161, 161);
    }
    .activo {
      color: green;
      font-weight: bold;
    }
    .inactivo {
      color: red;
      font-weight: bold;
    }
  `]
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  usuarioForm: any = {
    id_usuario: null,
    nombre_completo: '',
    usuario: '',
    contrasena: '',
    correo: '',
    estado: 'activo'
  };

  constructor(private usuarioService: UsuarioService,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: data => this.usuarios = data,
      error: err => console.error('Error al obtener usuarios:', err)
    });
  }

  guardarUsuario(): void {
    if (this.usuarioForm.id_usuario) {
      // Actualizar usuario
      this.usuarioService.actualizarUsuario(this.usuarioForm).subscribe({
        next: () => {
          this.cargarUsuarios();
  this.resetForm();
  this.snackBar.open('Usuario actualizado correctamente', '✕', {
    duration: 3000,
    panelClass: ['custom-snackbar', 'success-snackbar'],
    horizontalPosition: 'right',
    verticalPosition: 'top'
  });
        },
        error: err => console.error('Error al actualizar usuario:', err)
      });
    } else {
      // Agregar usuario
      this.usuarioService.agregarUsuario(this.usuarioForm).subscribe({
        next: () => {
              this.cargarUsuarios();
              this.resetForm();
              this.snackBar.open('Usuario agregado correctamente', '✕', {
                duration: 3000,
                panelClass: ['custom-snackbar', 'success-snackbar'],
                horizontalPosition: 'right',
                verticalPosition: 'top'
              });
            },
        error: err => console.error('Error al agregar usuario:', err)
      });
    }
  }

  editarUsuario(usuario: any): void {
    this.usuarioForm = { ...usuario, contrasena: '' }; // no mostrar contraseña por seguridad
  }

  eliminarUsuario(id: number): void {
  this.usuarioService.eliminarUsuario(id).subscribe({
    next: () => {
      this.cargarUsuarios();
      this.snackBar.open('Usuario eliminado correctamente', '✕', {
        duration: 3000,
        panelClass: ['custom-snackbar', 'success-snackbar'],
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    },
    error: () => {
      this.snackBar.open('Error al eliminar el usuario', '✕', {
        duration: 3000,
        panelClass: ['custom-snackbar', 'error-snackbar'],
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    }
  });
}


  cancelarEdicion(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.usuarioForm = {
      id_usuario: null,
      nombre_completo: '',
      usuario: '',
      contrasena: '',
      correo: '',
      estado: 'activo'
    };
  }
}
