import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {

  validatioForm: FormGroup; // Para Validação "validatioForm" precisa estar no html
  // [formGroup]="validatioForm" Exemplo

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validatioForm  = this.formBuilder.group({
      userName: ['', 
                Validators.required,
            ],  
      
               
      // Essa variavel precisa estar no html input formControlName="password"
      password: ['', Validators.required]
    })
  }

}
