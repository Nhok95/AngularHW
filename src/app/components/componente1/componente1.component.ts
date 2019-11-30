import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})

export class Componente1Component implements OnInit{
    
    nombre:string = undefined;
    nombres:string[] = ["Ambrosio", "Pancrasio", "Rodolfa"];
    godo:number = 0;
    edad:number = 20;
    activo:boolean = false;
    selectedFamilia:string = "HARDWARE";
    familias:string[] = ["SOFTWARE","HARDWARE","CONSUMIBLES"];
    sistemaNotificacion:string = "email";
    fechaNacimiento:Date = new Date(1981,1,1); //el mes es 0 based;
    numeroCaracteres:number = undefined;
    numeroRandom:number = 10 + Math.random()+10;

    ngOnInit(): void {
        this.nombre = "Funcito";
        this.numeroCaracteres = this.nombre.length;
    }

    test(): void {
        this.nombres.push(`Godofredo_${this.godo}`);
        this.godo++;
    }

    refresh(){
        this.numeroCaracteres = this.nombre.length;
    }

}
