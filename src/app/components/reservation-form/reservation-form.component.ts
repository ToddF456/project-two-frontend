import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { TempValuesService } from 'src/app/services/temp-values.service';
import { Customer } from 'src/models/customer';
import { Reservation } from 'src/models/reservation';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  reservation!: Reservation;
  customer!: Customer;

  constructor(
    private customerService: CustomerService,
    private tempValuesService: TempValuesService
  ) {}

  ngOnInit(): void {
    // Getting temp customer
    this.customer = this.tempValuesService.getCustomer();
    console.log(this.customer);

    // Creating new FormGroup
    // this.reservationForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   phoneNumber: new FormControl(),
    // });
  }

  onSubmit() {
    // this.customer.firstName = this.reservationForm.value.firstName;
    // this.customer.lastName = this.reservationForm.value.lastName;
    // this.customer.email = this.reservationForm.value.email;
    // this.customer.phoneNumber = this.reservationForm.value.phoneNumber;
  }
}
