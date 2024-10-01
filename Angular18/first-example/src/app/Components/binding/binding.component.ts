import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styles: ``
})


export class BindingComponent {
  title : string = "Binding Component Example";
  inputValue : string = "Sample Text";
  imgFile : string = "images/Phani.png"

  onSubmit(){
    this.inputValue = "Changing the value of the data";
  }

  onUpdate(event : any){
    this.inputValue = event.target.value;
  }
}
