import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'src/models/reservation';
import { Customer } from 'src/models/customer';
import { Room } from 'src/models/room';
import { TempValuesService } from 'src/app/services/temp-values.service';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Subject } from 'rxjs';

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
  submitted = false;
  updated: Subject<void> = new Subject<void>();
  
  constructor(
    private tempValuesService: TempValuesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      numGuests: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ])},{validators:dateValidator});
  }

  onSubmit() {
    // Prepare temp reservation with new start date / end date / confirmation number:
    this.reservation.startDate = this.bookingForm.value.startDate;
    this.reservation.endDate = this.bookingForm.value.endDate;
    this.reservation.confirmationNumber = Math.floor(
      10000 + Math.random() * 9000
    );

    // Prepare temp customer with new number of guests:
    this.customer.numGuests = this.bookingForm.value.numGuests;

    // Save temp reservation:
    this.tempValuesService.setReservation(this.reservation);
    // Save temp customer:
    this.tempValuesService.setCustomer(this.customer);
    // Save temp room:
    this.tempValuesService.setRoom(this.room);

    // show booking page:
    this.submitted = true;

    // update booking page
    this.updated.next();
  }

}

export const dateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const start = control.get('startDate');
  const end = control.get('endDate');  
  return start?.value !== null && end?.value !== null && start?.value < end?.value 
  ? null :{ dateValid:true };
    }