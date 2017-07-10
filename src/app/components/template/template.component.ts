import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario:Object = {
    nombre: "Fernando",
    apellido: "Herrera",
    correo: ""
  }

  constructor() { }

  guardar(forma: any) {
    console.log("ngForm", forma);
    console.log("Valor", forma.value);

    console.log("Usuario", this.usuario);
  }
}
