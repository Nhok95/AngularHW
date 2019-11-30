import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {

  precio:number = undefined;
  tipoPizzaSelected:string = "margarita";

  tipos:string[] = ["margarita", "cuatro quesos", "diavola", "romana", "sinensia"];

  mapPrecios = new Map([["margarita", 5],
                    ["cuatro quesos", 8],
                    ["diavola", 10],
                    ["romana",12 ],
                    ["sinensia", 15]
                  ]);

  champis:boolean = false;
  queso:boolean = false;
  tamanyoSelected:number = 1;

  tamanyos:number[] = [1,2,3,4,5];

  constructor() { }

  ngOnInit() {
  }

  calculatePrice() {

    var precioTipoPizza = this.mapPrecios.get(this.tipoPizzaSelected);

    var gotChampis = 0;
    var gotQueso = 0;

    if (this.champis) gotChampis = 1;
    if (this.queso) gotQueso = 1;

    this.precio = 10 + precioTipoPizza + gotChampis*2 + gotQueso*2 + this.tamanyoSelected*3; 
  }

}
