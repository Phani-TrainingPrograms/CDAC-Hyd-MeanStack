import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../../Pipes/reverse.pipe';
//Pipes are transformations for the data to suit UR Application UI requirements. Angular gives built in pipes using which U can do UI transformations. This is done using | key available in the keyboard

@Component({
  selector: 'app-pipe-example',
  standalone: true,
  imports: [ CommonModule, ReversePipe],
  templateUrl: './pipe-example.component.html',
  styles: ``
})
export class PipeExampleComponent {
   content : string = "My Name is Phaniraj";
   salary : number = 45000;
   info : number = 0.45;
   dateOfBirth : Date = new Date("12/01/1976");
   jsonData : any =  {
    name : "Phaniraj", address : "Bangalore", email : "phanirajbn@gmail.com"
   } 
}
