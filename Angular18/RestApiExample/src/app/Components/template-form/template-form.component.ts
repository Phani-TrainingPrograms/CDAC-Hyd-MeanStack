import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
//Template driven form uses the HTML Validation Templates and validates the inputs given by the User. Angular uses a component called NgForm to enforce validation for the HTML elements in Angular Apps. 
@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.component.html',
  styles: ``
})
export class TemplateFormComponent {
  onSubmit(form : NgForm){
    if(form.valid){
      alert("Form is succesfully submitted")
      //connect to service and send this data to  the backend...
    }
  }
}
