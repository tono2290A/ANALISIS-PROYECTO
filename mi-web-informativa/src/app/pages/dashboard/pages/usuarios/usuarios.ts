import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../../servicios/usuario.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lista de Usuarios</h2>
    <table class="usuarios-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre Completo</th>
          <th>Usuario</th>
          <th>Correo</th>
          <th>Fecha de Creación</th>
          <th>Estado</th>
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
      background-color: #f1f1f1;
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

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: data => this.usuarios = data,
      error: err => console.error('Error al obtener usuarios:', err)
    });
  }
}
  