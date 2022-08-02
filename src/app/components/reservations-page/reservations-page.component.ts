import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation.service';
import { CustomerService } from 'src/app/services/customer.service';
import { TempValuesService } from 'src/app/services/temp-values.service';
import { Reservation } from 'src/models/reservation';
import { Customer } from 'src/models/customer';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/models/room';

@Component({
  selector: 'reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.css'],
})
export class ReservationsPageComponent implements OnInit {
  resForm: FormGroup = new FormGroup({});
  resDetails!: FormGroup;
  reservation!: Reservation;
  customer: Customer = new Customer();
  roomList :Room[] = [];

  constructor(
    private resService: ReservationService,
    private customerService: CustomerService,
    private roomService: RoomService,
    private tempValuesService: TempValuesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Creating new FormGroup
    this.resForm = new FormGroup({
      resNumber: new FormControl(null, [
        Validators.required,
        Validators.min(4),
      ]),
    });

    // Creating FormBuilder
    this.resDetails = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      numGuests: [''],
      roomType: [''],
      startDate: [''],
      endDate: [''],
    });
  }

  onSubmit() {
    this.resService
      .getReservationByConfirmationNum(this.resForm.value.resNumber)
      .subscribe((res) => {
        this.reservation = res;
        this.tempValuesService.setReservation(this.reservation);
        this.customerService
          .getCustomer(res.customerId)
          .subscribe((results) => {
            this.customer = results;
            this.tempValuesService.setCustomer(this.customer);
            this.editReservation(this.customer, this.reservation);
            this.roomService.getAllRooms().subscribe( resp => this.roomList = resp);
          });
      });
    // this.router.navigate(['/reservations/change']);
  }

  editReservation(customer: Customer, reservation: Reservation) {
    this.resDetails.controls['firstName'].setValue(customer.firstName);
    this.resDetails.controls['lastName'].setValue(customer.lastName);
    this.resDetails.controls['email'].setValue(customer.email);
    this.resDetails.controls['phoneNumber'].setValue(customer.phoneNumber);
    this.resDetails.controls['numGuests'].setValue(customer.numGuests);
    this.resDetails.controls['startDate'].setValue(reservation.startDate);
    this.resDetails.controls['endDate'].setValue(reservation.endDate);
    this.resDetails.controls['roomType'].setValue(reservation.roomId);
  }

  onSave() {
    // Updating customer and reservation values
    this.customer.firstName = this.resDetails.value.firstName;
    this.customer.lastName = this.resDetails.value.lastName;
    this.customer.email = this.resDetails.value.email;
    this.customer.phoneNumber = this.resDetails.value.phoneNumber;
    this.customer.numGuests = this.resDetails.value.numGuests;
    this.reservation.startDate = this.resDetails.value.startDate;
    this.reservation.endDate = this.resDetails.value.endDate;
    this.reservation.roomId = this.resDetails.value.roomType;
    // Save updated customer to db
    this.customerService
      .saveCustomer(this.customer)
      .subscribe((res) => {
        console.log(res)
        this.resService.updateReservation(this.reservation)
        .subscribe( {
          next: (resp) => {
            alert("Sucess!");
          }, 
          error: (err) => {
            alert("Room is not available")
          }
        });
      });
  }

  onDelete() {
    this.resService.deleteReservation(this.reservation).subscribe((res) => {
      console.log(res);
    });
  }
}
