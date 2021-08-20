import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Telefone } from 'src/app/model/telefone';

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario = new User();

  telefone = new Telefone();

  constructor(private routeActive: ActivatedRoute, private userService: UsuarioService) {
  }
  ngOnInit() {
    // variável id vai ser carregada quando o id não for nulo, se nulo, vai para novo.
    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      this.userService.getStudent(id).subscribe(data => {
        this.usuario = data;
      });
    }
  }

  salvarUser() {
    // Atualizando ou editando
    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) {
      this.userService.updateUser(this.usuario).subscribe(data => {
        this.limpar();
      });
    } else {
      this.userService.salvarUser(this.usuario).subscribe(data => {
        this.limpar();
      });
    }
  }

  limpar() {
    this.usuario = new User();
  }

  getCpfMask(): string {
    return '000.000.000-00';
  }
   getNumeroMask(): string {
    return '(00) 0 0000-0000 ';
  }


  excluirTelefone(id, i) {

    if (id == null) {
      this.usuario.telefones.splice(i, 1);
      return;
    }

    if (id !== null && confirm('Deseja remover?')) {
      this.userService.excluirTelefone(id).subscribe(data => {
        this.usuario.telefones.splice(i, 1);
      });
    }
  }

  addFone() {
    if (this.usuario.telefones === undefined) {
      this.usuario.telefones = new Array<Telefone>();
    }
    this.usuario.telefones.push(this.telefone);
    this.telefone = new Telefone();
  }
}
