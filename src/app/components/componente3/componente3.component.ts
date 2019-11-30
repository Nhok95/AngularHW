import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})


export class Componente3Component implements OnInit {

  value1:number = 0;
  value2:number = 0;

  firstSelected:string = "euro";
  secondSelected:string = "dolar";
  coins:string[] = ["euro", "dolar", "franco suizo", "bolivar venezolano", "rublo"];
  
  cambio = new Map([["euro", 1],
                    ["dolar", 1.10],
                    ["franco suizo", 1.10],
                    ["bolivar venezolano",35886.99 ],
                    ["rublo", 70.44]
                  ]);
  
  constructor() { }

  ngOnInit() {
  }

  refreshcoin1() {
    var valueConversion1 = this.cambio.get(this.firstSelected);
    var valueConversion2 = this.cambio.get(this.secondSelected);

    this.value2 = Math.round( ((this.value1* valueConversion2*1000/valueConversion1) ))/1000;

  }

  refreshcoin2() {
    var valueConversion1 = this.cambio.get(this.firstSelected);
    var valueConversion2 = this.cambio.get(this.secondSelected);

    this.value1 = Math.round( ((this.value2* valueConversion1*1000/valueConversion2) ))/1000;

  }

}
