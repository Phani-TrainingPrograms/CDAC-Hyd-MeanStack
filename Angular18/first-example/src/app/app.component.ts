import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './Components/second/second.component';
import { SinglefileComponent } from "./Components/singlefile/singlefile.component";
import { BindingComponent } from "./Components/binding/binding.component";
import { CalcComponent } from "./Components/calc/calc.component";
//Every component will have data(fields), functions(to manupulate the data and event handling). The TS file is used to implement the programming logic of ur component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SecondComponent, SinglefileComponent, BindingComponent, CalcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//Angular uses MVC pattern where the controller is the TS file, Model might be the data to present and View is a HTML Content that explains how U R presenting the data(model).
export class AppComponent {
  //fields:
  id : number = 1;
  name : string = "Phaniraj"
  address : string ="Bangalore"
  email : string = "phanirajbn@gmail.com"
  //Expect the data to come from a persistance APIs like REST. 
  addFunc = function(){
    alert("test this func");
  }
}
