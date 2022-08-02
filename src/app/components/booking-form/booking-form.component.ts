import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'src/models/reservation';
import { Customer } from 'src/models/customer';
import { Room } from 'src/models/room';
import { TempValuesService } from 'src/app/services/temp-values.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent implements OnInit {
  bookingForm: FormGroup = new FormGroup({});
  reservation: Reservation = new Reservation();
  customer: Customer = new Customer();
  room: Room = new Room();

  constructor(
    private tempValuesService: TempValuesService,
    private router: Router,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      numGuests: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
    });
  }

  onSubmit() {
    // Prepare temp reservation with new start date / end date / confirmation number:
    this.reservation.start_date = this.bookingForm.value.startDate;
    this.reservation.end_date = this.bookingForm.value.endDate;
    this.reservation.confirmationNumber =
      Math.floor(1000 + Math.random() * 9000) + this.reservation.res_id;

    // Prepare temp customer with new number of guests:
    this.customer.numGuests = this.bookingForm.value.numGuests;

    // Save temp reservation:
    this.tempValuesService.setReservation(this.reservation);
    // Save temp customer:
    this.tempValuesService.setCustomer(this.customer);
    // Save temp room:
    this.tempValuesService.setRoom(this.room);

    // Redirect to booking page:
    this.router.navigate(['/booking']);
  }
}
