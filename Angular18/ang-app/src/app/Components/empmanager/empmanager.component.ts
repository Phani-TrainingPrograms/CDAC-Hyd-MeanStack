import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Models/employee';
import { CommonModule } from '@angular/common';
import { EmpInfoComponent } from '../emp-info/emp-info.component';
import { EmpviewComponent } from "../empview/empview.component";
@Component({
  selector: 'app-empmanager',
  standalone: true,
  imports: [CommonModule, EmpInfoComponent, EmpviewComponent],
  templateUrl: './empmanager.component.html',
  styles: ``
})

export class EmpmanagerComponent implements OnInit {
  //place where U can initialize the data that might come from an external source. 
  ngOnInit(): void {
    this.empList.push({ id : 123, name: "Phaniraj", address: "Bangalore", salary : 45000, empPic : 'images/pic1.png' } as Employee );
    this.empList.push({ id : 124, name: "Hemanth", address: "Delhi", salary : 65000, empPic : 'images/pic2.png' } as Employee );
    this.empList.push({ id : 125, name: "Suresh", address: "Pune", salary : 75000, empPic : 'images/pic3.png' } as Employee );
    this.empList.push({ id : 126, name: "Abhishek", address: "Agra", salary : 55000, empPic : 'images/pic4.png' } as Employee );
    this.empList.push({ id : 127, name: "Sahana", address: "Kanpur", salary : 40000, empPic : 'images/pic5.png' } as Employee );

  }
  selectedEmp : Employee  = {} as Employee;
  empList : Employee[] = [];
  edit : boolean = false;
  //When a component is loaded into the Browser, it might need to call a function that shall fill the data for UR UI. 
  
  onView(emp : Employee) {
    this.edit = true;
    this.selectedEmp = emp;
  }

  onEdit(emp: Employee){
    this.edit = false;
    this.selectedEmp = emp;
  }
  

  onOutputRecieved(emp: Employee){
    const index = this.empList.findIndex(e => e.id == emp.id);
    if(index < 0){
      alert("No record found to update");
    }else{
      this.empList.splice(index, 1, emp);
      alert("Employee updated successfully");
    }
  }
}
