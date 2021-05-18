import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  products: any;
  employees: any;
  customers: any;
  title = "tarea4";
  customerObject = {customerId: "", companyName: "", contactName: ""};
  employeeObject = {firstName: "", lastName: ""};
  productObject = {productName: "a", unitPrice: "100"};

  constructor(private http: HttpClient){
    this.getProducts();
    this.getEmployees();
    this.getCustomers();
  }

  ngOnInit(): void {
  }

  getProducts(): void{
    this.http.get("http://localhost:5000/Products").subscribe(res => {
      this.products = res;
    });
  }

  getEmployees(): void{
    this.http.get("http://localhost:5000/Employees").subscribe((res) => {
      this.employees = res;
    });
  }

  getCustomers(): void{
    this.http.get("http://localhost:5000/Customers").subscribe(res => {
      this.customers = res;
    });
  }

  sendProduct(): void{
    this.http.put("http://localhost:5000/Products", this.productObject).subscribe(data => {
      console.dir(data);
    });
  }

  sendEmployee(): void{
    this.http.put("http://localhost:5000/Employees", this.employeeObject).subscribe(data => {
      console.dir(data);
    });
  }

  sendCustomer(): void{
    this.http.put("http://localhost:5000/Customers", this.customerObject).subscribe(data => {
      console.dir(data);
    });
  }

}
