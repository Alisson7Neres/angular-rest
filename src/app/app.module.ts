import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'

// Requisições Ajax
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';

import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { UsuarioAddComponent } from './components/usuario/usuario-add/usuario-add.component';
import { GuardiaoGuard } from './service/guardiao.guard';
import { NgxCurrencyModule } from 'ngx-currency';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { UsuarioReportComponent } from './components/usuario/usuario/usuario-report/usuario-report.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

export const appRouters: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [GuardiaoGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'usuarioList', component: UsuarioComponent, canActivate: [GuardiaoGuard] },
  { path: 'usuarioAdd', component: UsuarioAddComponent, canActivate: [GuardiaoGuard] },
  { path: 'usuarioAdd/:id', component: UsuarioAddComponent, canActivate: [GuardiaoGuard] },
  { path: 'userReport', component: UsuarioReportComponent, canActivate: [GuardiaoGuard] },
  { path: 'chart', component: BarChartComponent, canActivate: [GuardiaoGuard]}
];

const maskConfig: Partial<IConfig> = {
  validation: false,
};

export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent,
    UsuarioReportComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule,
    NgxMaskModule.forRoot(maskConfig),
    NgxPaginationModule,
    NgxCurrencyModule,
    NgbModule,
    ChartsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule { }
