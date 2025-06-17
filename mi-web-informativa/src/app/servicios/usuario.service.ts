import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario);
  }

  actualizarUsuario(usuario: any): Observable<any> {
    const url = `${this.apiUrl}/${usuario.id_usuario}`;
    return this.http.put<any>(url, usuario);
  }

  eliminarUsuario(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
  // usuario.service.ts
  
  iniciarSesion(usuario: string, contrasena: string): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/login`, { usuario, contrasena });
  }
}
