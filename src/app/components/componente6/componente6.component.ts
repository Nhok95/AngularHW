import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente6',
  templateUrl: './componente6.component.html',
  styleUrls: ['./componente6.component.css']
})
export class Componente6Component implements OnInit {

  amigos:string[] = ["Pepin", "Bartolo", "Honorio", "Carlota"];
  acreedores:string[] = ["Ana", "Toni"];


  constructor() { }

  ngOnInit() {
  }

  reset(){

    this.amigos = this.amigos.concat(this.acreedores);
    this.acreedores = [];

    console.log(this.amigos)

  }

  moveToAmigos(newAmigo) {
    this.amigos.push(newAmigo);
    
    this.acreedores.splice(this.acreedores.indexOf(newAmigo),1);
  }

  moveToAcreedores(newAcreedor) {
    this.acreedores.push(newAcreedor);

    this.amigos.splice(this.amigos.indexOf(newAcreedor),1);
  }

  
}
