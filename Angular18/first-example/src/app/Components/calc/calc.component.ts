import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './calc.component.html',
  styles: ``
})
export class CalcComponent {
  fValue : number = 0.0;
  sValue : number = 0.0;
  result : number = 0.0;
  operation : string = "";

  onCalc() {
    switch (this.operation) {
      case "Add": this.result = this.fValue + this.sValue; break;
      case "Subtract": this.result = this.fValue - this.sValue; break;
      case "Multiply":this.result = this.fValue * this.sValue; break;
      case "Divide": this.result = this.fValue / this.sValue; break;
      default:alert("Invalid choice");break;
    }
  }
}
