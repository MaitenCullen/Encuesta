import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
interface ContactForm 
{
"nombre": string;
"check": boolean;
"valor": boolean;
"apellido":string;
"comentario": string;
}


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']

})


export class FormularioComponent implements OnInit{

    model = {
      
        nombre: "",
        check: true,
        valor: true,
        apellido:"",
        comentario: "",
        
    }


  constructor() {}
  ngOnInit(): void {
      
  }

  onSubmit(values: any):void {
    console.log('Form values', values );
  }
}
