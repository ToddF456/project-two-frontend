import { Injectable } from '@angular/core';
import { Reservation } from 'src/models/reservation';
import { Customer } from 'src/models/customer';
import { Room } from 'src/models/room';

@Injectable({
  providedIn: 'root',
})
export class TempValuesService {
  tempReservation!: Reservation;
  tempCustomer!: Customer;
  tempRoom!: Room;

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

  // Temp room
  setRoom(temp: Room) {
    this.tempRoom = temp;
  }
  getRoom() {
    return this.tempRoom;
  }
}
