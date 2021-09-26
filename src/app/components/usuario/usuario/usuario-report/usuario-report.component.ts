import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserReport } from 'src/app/model/UserReport';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './usuario-report.component.html',
  styleUrls: ['./usuario-report.component.css']
})
export class UsuarioReportComponent {

  userReport = new UserReport;

  constructor(private routeActive: ActivatedRoute, private userService: UsuarioService) {
  }
  ngOnInit() {

  }

  getNascimentoMask(): string {
    return '00/00/0000';
  }

  imprimiRelatorio(){
    console.log(this.userReport)
    this.userService.downloadPdfRelatorioParam(this.userReport);
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
