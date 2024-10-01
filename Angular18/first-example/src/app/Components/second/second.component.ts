import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  template: `<h1>{{title}}</h1>
            <p>{{paragraph}}</p>`,
  styles: 'p{ color : red; backgroundColor : yellow}'
})
export class SecondComponent {
  title = "Sample Text"
  paragraph = "Some Text"
}
