import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customerURL: string;

  constructor(private http: HttpClient) {
    this.customerURL = 'http://localhost:8080/customers/';
  }

  getCustomer(customer: Customer): Observable<Customer> {
    return this.http.get<Customer>(
      `${this.customerURL}/${customer.firstName}/${customer.lastName}`
    );
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerURL, customer);
  }
}
