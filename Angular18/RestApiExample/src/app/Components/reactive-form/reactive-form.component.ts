import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './reactive-form.component.html',
  styles: ``
})
export class ReactiveFormComponent {
  empForm : FormGroup;

  constructor(private fb : FormBuilder) {
    this.empForm = this.fb.group({
      name : ['', [Validators.required, Validators.minLength(5)]],
      email : ['', [Validators.required, Validators.email]],
      mobile : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    })
  }

  onSubmit() : void{
    if(this.empForm.valid){
      alert("Employee added successfully")
    }
  }
}
