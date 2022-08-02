import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TempValuesService } from 'src/app/services/temp-values.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/models/customer';
import { Reservation } from 'src/models/reservation';
import { DateTime } from 'luxon';
import { Room } from 'src/models/room';

@Component({
  selector: 'app-booking-final',
  templateUrl: './booking-final.component.html',
  styleUrls: ['./booking-final.component.css'],
})
export class BookingFinalComponent implements OnInit {
  bookingModal: FormGroup = new FormGroup({});
  customer!: Customer;
  reservation!: Reservation;
  room!: Room;
  grand_total: number = 0;

  constructor(
    private tempValuesService: TempValuesService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    // Create formGroup
    this.bookingModal = new FormGroup({
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      num_guests: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(10),
      ]),
    });
    // Get temp customer, reservation and room
    this.customer = this.tempValuesService.getCustomer();
    this.reservation = this.tempValuesService.getReservation();
    this.room = this.tempValuesService.getRoom();

    // Calculate Grand Total
    let days = this.calculateDays(
      this.reservation.start_date,
      this.reservation.end_date
    );
    this.grand_total = this.room.price * days;
  }

  calculateDays(start_date: string, end_date: string) {
    let fromDate = DateTime.fromISO(start_date);
    let toDate = DateTime.fromISO(end_date);
    let duration = toDate.diff(fromDate, 'days');
    return duration.days;
  }
  onSubmit() {
    // Preparing customer to be saved in the db
    this.customer.firstName = this.bookingModal.value.first_name;
    this.customer.lastName = this.bookingModal.value.last_name;
    this.customer.email = this.bookingModal.value.email;
    this.customer.phoneNumber = this.bookingModal.value.phone;

    // Preparing reservation to be saved in the db
    this.reservation.room_id = this.room.roomId;

    // Save customer to db
    // this.customerService
    //   .saveCustomer(this.customer)
    //   .subscribe((res) => console.log(res));

    console.log(this.customer);
    console.log(this.reservation);
  }
}
