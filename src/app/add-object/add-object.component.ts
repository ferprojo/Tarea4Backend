import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-object',
  templateUrl: './add-object.component.html',
  styleUrls: ['./add-object.component.scss']
})
export class AddObjectComponent implements OnInit {

  customerObject = {customerId: "", companyName: "", contactName: ""};
  employeeObject = {firstName: "", lastName: ""};
  productObject = {productName: "", unitPrice: ""};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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
