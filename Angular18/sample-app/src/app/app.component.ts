import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'phani',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title  = "My Application Name";//data
  name : string = "Phaniraj"
  address : string = "Bangalore"
  salary : number = 45000
}
