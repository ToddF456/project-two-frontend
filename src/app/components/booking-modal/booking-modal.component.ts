import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TempValuesService } from 'src/app/services/temp-values.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/models/customer';
import { Reservation } from 'src/models/reservation';

@Component({
  selector: 'booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.css'],
})
export class BookingModalComponent implements OnInit {
  bookingModal: FormGroup = new FormGroup({});
  customer: Customer = this.tempValuesService.getCustomer();
  reservation: Reservation = this.tempValuesService.getReservation();

  constructor(
    private tempValuesService: TempValuesService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
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
  }

  onSubmit() {
    this.customer.firstName = this.bookingModal.value.first_name;
    this.customer.lastName = this.bookingModal.value.last_name;
    this.customer.email = this.bookingModal.value.email;
    this.customer.phoneNumber = this.bookingModal.value.phone;
    // this.customerService
    //   .saveCustomer(this.customer)
    //   .subscribe((res) => console.log(res));
  }
}
