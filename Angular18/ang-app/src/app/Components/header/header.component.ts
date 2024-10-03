import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
    title : string ="Angular Training for CDAC" 
}
