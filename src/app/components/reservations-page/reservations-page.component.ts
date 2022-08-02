import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  reservation!: Reservation;
  customer: Customer = new Customer();

  constructor(
    private resService: ReservationService,
    private customerService: CustomerService,
    private tempValuesService: TempValuesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Creating new FormGroup
    this.resForm = new FormGroup({
      resNumber: new FormControl(null, [
        Validators.required,
        Validators.min(4),
      ]),
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
            console.log(this.customer);
          });
      });
    this.router.navigate(['/reservations/change']);
  }
}
