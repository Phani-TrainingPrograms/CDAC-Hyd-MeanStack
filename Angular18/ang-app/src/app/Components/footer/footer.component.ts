import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: `p{
            font-style: italic; 
            font-size : 0.8em;
            text-align : center;
   }`
})
export class FooterComponent {
  company : string ="Angular Training by CDAC"
   content : string = "All Rights Reserved";
   year : number = new Date().getFullYear();
}
