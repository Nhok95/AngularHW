import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
  styleUrls: ['./componente5.component.css']
})



export class Componente5Component implements OnInit {

  productos:any[] = [];
  nombreProducto:string = undefined;
  cantidadProducto:string = undefined;

  constructor() { }

  ngOnInit() {
  }

  add(){
    var p1 = {
      nombre: this.nombreProducto,
      cantidad: this.cantidadProducto
    };

    this.productos.push(p1)
  }


  eliminar(i){
    var index = this.productos.indexOf(i);
    
    this.productos.splice(index,1);

  }
}
