import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'

// Requisições Ajax
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';

import { NgxMaskModule, IConfig } from 'ngx-mask';

import { ModuleWithProviders } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { UsuarioAddComponent } from './components/usuario/usuario-add/usuario-add.component';

export const appRouters: Routes = [
  {path : 'home' , component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: '', component : LoginComponent},
  {path: 'usuarioList', component : UsuarioComponent},
  {path: 'usuarioAdd', component : UsuarioAddComponent},
  {path: 'usuarioAdd/:id', component : UsuarioAddComponent}
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    HttpInterceptorModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }