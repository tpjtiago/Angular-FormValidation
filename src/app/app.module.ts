import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormvalidationComponent } from './Formulario/formvalidation/formvalidation.component';
import {ReactiveFormsModule} from '@angular/forms'; // Para Validação de formulario reativo

@NgModule({
  declarations: [
    AppComponent,
    FormvalidationComponent,    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // Para Validação de formulario reativo

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
