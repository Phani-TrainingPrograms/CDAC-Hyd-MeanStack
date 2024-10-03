import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../Models/employee';
import { EmpInfoComponent } from "../emp-info/emp-info.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empview',
  standalone: true,
  imports: [CommonModule, EmpInfoComponent, FormsModule],
  templateUrl: './empview.component.html',
  styles: ``
})
export class EmpviewComponent {
  @Input() emp = {} as Employee;
  @Input() edit : boolean = false;

  @Output() onUpdate : EventEmitter<Employee> = new EventEmitter<Employee>();

  onEmployeeUpdate(){
    this.onUpdate.emit(this.emp);
  }
}
