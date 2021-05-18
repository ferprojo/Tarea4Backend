import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-objects',
  templateUrl: './view-objects.component.html',
  styleUrls: ['./view-objects.component.scss']
})
export class ViewObjectsComponent implements OnInit {

  products: any;
  employees: any;
  customers: any;

  constructor(private http: HttpClient) { 

    this.getObjects();
  }

  ngOnInit(): void {
  }

  getProducts(): void{
    this.http.get("http://localhost:5000/Products").subscribe(res => {
      this.products = res;
      console.dir(res);
    });
  }

  getEmployees(): void{
    this.http.get("http://localhost:5000/Employees").subscribe((res) => {
      this.employees = res;
      console.dir(res);
    });
  }

  getCustomers(): void{
    this.http.get("http://localhost:5000/Customers").subscribe(res => {
      this.customers = res;
      console.dir(res);
    });
  }

  getObjects(): void{
    this.getProducts();
    this.getEmployees();
    this.getCustomers();
  }

  deleteCustomer(id: string) : void{
    this.http.delete("http://localhost:5000/Customers/" + id).subscribe(data => {
      console.dir(data);
      this.getObjects();
    });
  }

  deleteProduct(id: string) : void{
    this.http.delete("http://localhost:5000/Products/" + id).subscribe(data => {
      console.dir(data);
      this.getObjects();
    });
  }

  deleteEmployee(id: string) : void{
    this.http.delete("http://localhost:5000/Employee/" + id).subscribe(data => {
      //console.dir(data);
      this.getObjects();
    });
  }

}
