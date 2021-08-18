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

  students: Observable<User[]>;
  nome: string;
  verLista: boolean;

  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit() {
    this.usuarioService.getStudentList().subscribe(data => {
      this.students = data;
    });
  }

  deleteUsuario(id: number) {

    if (confirm('Deseja mesmo remover?')) {

      this.usuarioService.deletarUsuario(id).subscribe(data => {
        console.log("Retorno do metódo delete : " + data);

        this.usuarioService.getStudentList().subscribe(data => {
          this.students = data;
        });
      });
    }
  }
  consultarUser() {
    this.usuarioService.consultarUser(this.nome).subscribe(data => {
      this.students = data;
    });
  }
  mostrarUsers(): boolean {
    return this.verLista = ! this.verLista;
  }
}