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

  constructor(
    private resService: ReservationService,
    private customerService: CustomerService,
    private tempValuesService: TempValuesService,
    private router: Router,
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
            this.editReservation(this.customer);
          });
      });
    // this.router.navigate(['/reservations/change']);
  }

  editReservation(customer: Customer) {
    this.resDetails.controls['firstName'].setValue(customer.firstName);
    this.resDetails.controls['lastName'].setValue(customer.lastName);
    this.resDetails.controls['email'].setValue(customer.email);
    this.resDetails.controls['phoneNumber'].setValue(customer.phoneNumber);
  }

  onSave() {
    // Updating customer values
    this.customer.firstName = this.resDetails.value.firstName;
    this.customer.lastName = this.resDetails.value.lastName;
    this.customer.email = this.resDetails.value.email;
    this.customer.phoneNumber = this.resDetails.value.phoneNumber;

    // Save updated customer to db
    this.customerService
      .saveCustomer(this.customer)
      .subscribe((res) => console.log(res));
  }
}
