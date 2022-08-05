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
    this.customerURL = 'http://leboutiquehotel-env.eba-8vkrn3gf.us-east-2.elasticbeanstalk.com/customers';
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.customerURL}/${id}`);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerURL, customer);
  }
}
