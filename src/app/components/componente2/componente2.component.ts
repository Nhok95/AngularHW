import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  celsius:number = 0;
  fahrenheit:number = 32;
  kelvin:number = 273.15;

  numeroDecimales:number = 3;
  valorDecimales:number = undefined;

  constructor() { }

  ngOnInit() {
    this.valorDecimales = Math.pow(10,this.numeroDecimales);
  }

  refreshCelsius() {
    if (this.celsius == undefined) {
      this.fahrenheit = undefined;
      this.kelvin = undefined;

    } else {
      this.fahrenheit = Math.round( ((this.celsius*1.8) + 32) * this.valorDecimales)/this.valorDecimales ;
      this.kelvin = Math.round( (this.celsius + 273.15)* this.valorDecimales)/this.valorDecimales;

    }
    
  }

  refreshFahren() {
    if (this.fahrenheit == undefined) {
      this.celsius = undefined;
      this.kelvin = undefined;

    } else {
      this.celsius = Math.round(( (this.fahrenheit-32)*(5/9) )*this.valorDecimales)/this.valorDecimales;
      this.kelvin = Math.round(( (this.fahrenheit-32)*(5/9) +273.15 )*this.valorDecimales)/this.valorDecimales;
    }

  }

  refreshKelvin() {
    if (this.kelvin == undefined) {
      this.celsius = undefined;
      this.fahrenheit = undefined;

    } else {
      this.celsius = Math.round((this.kelvin -273.15)*this.valorDecimales)/this.valorDecimales;
      this.fahrenheit = Math.round((( (this.kelvin -273.15) * 1.8) + 32)*this.valorDecimales)/this.valorDecimales;
    }
  }

}
