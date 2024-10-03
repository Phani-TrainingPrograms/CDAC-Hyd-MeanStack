import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Employee } from '../../Models/employee';

@Component({
  selector: 'app-emp-info',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './emp-info.component.html',
  styles: ``
})
export class EmpInfoComponent {
 @Input() empObj = {} as Employee
 
}
