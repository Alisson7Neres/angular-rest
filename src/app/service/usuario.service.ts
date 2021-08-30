import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

  deletarUsuario(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, { responseType: 'text' });
  }

  consultarUser(nome: String): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome)
  }
  consultarUserPorPage(nome: String, page: Number): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome + "/page/" + page)
  }
  getStudent(id): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + id);
  }
  getStudentListPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + 'page/' + pagina);
  }
  salvarUser(user): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, user)
  }
  updateUser(user): Observable<any> {
    return this.http.put<any>(AppConstants.baseUrl, user)
  }
  excluirTelefone(id): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + "telefone/" + id, { responseType: 'text' })
  }
  salvarTelefone(telefone): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, telefone)
  }
  userAutenticado() {
    if (localStorage.getItem('token') !== null &&
      localStorage.getItem('token').toString().trim() !== null) {
      return true;
    } else {
      return false;
    }
  }
}
