import { NgModule }             from '@angular/core';

//Modules
import { RouterModule, Routes }               from '@angular/router';

//Components
import { Componente1Component }      from './components/componente1/componente1.component';
import { Componente2Component }      from './components/componente2/componente2.component';
import { Componente3Component }      from './components/componente3/componente3.component';
import { Componente4Component }      from './components/componente4/componente4.component';
import { Componente5Component }      from './components/componente5/componente5.component';
import { Componente6Component }      from './components/componente6/componente6.component';

const routes:Routes = [
                { path: '', redirectTo: '/com1', pathMatch: 'full'},
                { path: 'com1', component: Componente1Component},
                { path: 'com2', component: Componente2Component},
                { path: 'com3', component: Componente3Component},
                { path: 'com4', component: Componente4Component},
                { path: 'com5', component: Componente5Component},
                { path: 'com6', component: Componente6Component},
                { path: '**', redirectTo: '/com1'}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],    // importo y "configuro" este módulo
  exports: [RouterModule]                     // "ofrezco" este modulo al módulo principal
})

export class AppRoutingModule { }
