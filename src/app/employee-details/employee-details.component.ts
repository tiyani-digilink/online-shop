import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  public employees: {id:number, name:string, age: number}[] = [];

  constructor(private _employeeServices: EmployeeService ){}

  ngOnInit(): void {
      this.employees = this._employeeServices.getEmployees();
  }

}
