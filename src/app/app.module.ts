import { NgModule }             from '@angular/core';

// Modules
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }           from '@angular/forms';           //Para disponer de 2way data binding
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent }         from './app.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { Componente4Component } from './components/componente4/componente4.component';
import { Componente5Component } from './components/componente5/componente5.component';
import { Componente6Component } from './components/componente6/componente6.component';

// NgModule es un decorador
@NgModule({
  declarations: [
    AppComponent, 
    Componente1Component, 
    Componente2Component, 
    Componente3Component,
    Componente4Component,
    Componente5Component,
    Componente6Component],            // componentes que forman parte de este modulo
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule
  ],                         // modulos que forman parte de este modulo
  providers: [],                                                 // servicios que forman parte de este modulo
  bootstrap: [AppComponent]                                      // componente base
})
export class AppModule { }
