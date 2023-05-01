import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1, "name": "Tiyani","age":28},
      {"id":2, "name": "Clyde","age":27},
      {"id":3, "name": "Zuni","age":18},
      {"id":4, "name": "Baloyi","age":280}
    ];
  }
}
