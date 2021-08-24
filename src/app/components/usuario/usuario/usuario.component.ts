import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students: Array<User[]>;
  nome: String;
  verLista: Boolean;
  p: Number;
  total: Number;

  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit() {
    this.usuarioService.getStudentList().subscribe(data => {
      this.students = data.content;
      this.total = data.totalElements;
    });
  }

  deleteUsuario(id: number, index: number) {

    if (confirm('Deseja mesmo remover?')) {

      this.usuarioService.deletarUsuario(id).subscribe(data => {

        // Remover da tela
      this.students.splice(index, 1);
      });
    }
  }
  consultarUser() {
    this.usuarioService.consultarUser(this.nome).subscribe(data => {
      this.students = data.content;
      this.total = data.totalElements;
      console.info(this.nome);
    });
  }
  mostrarUsers(): boolean {
    return this.verLista = !this.verLista;
  }
  carregarPagina(pagina) {
    this.usuarioService.getStudentListPage(pagina - 1).subscribe(data => {
      this.students = data.content;
      this.total = data.totalElements;
    });
  }
}