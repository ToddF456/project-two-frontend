import { Injectable } from '@angular/core';
import { Reservation } from 'src/models/reservation';
import { Customer } from 'src/models/customer';

@Injectable({
  providedIn: 'root',
})
export class TempValuesService {
  tempReservation!: Reservation;
  tempCustomer!: Customer;

  constructor() {}

  // Temp reservation
  setReservation(temp: Reservation) {
    this.tempReservation = temp;
  }
  getReservation() {
    return this.tempReservation;
  }

  // Temp customer
  setCustomer(temp: Customer) {
    this.tempCustomer = temp;
  }
  getCustomer() {
    return this.tempCustomer;
  }
}
