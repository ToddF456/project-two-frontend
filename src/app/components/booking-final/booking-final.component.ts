import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TempValuesService } from 'src/app/services/temp-values.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/models/customer';
import { Reservation } from 'src/models/reservation';
import { DateTime } from 'luxon';
import { Room } from 'src/models/room';
import { ReservationService } from 'src/app/services/reservation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  notAvailable = false;
  @ViewChild('confirmationModal') confirmationModal: any;
  modalReference: any;

  constructor(
    private tempValuesService: TempValuesService,
    private customerService: CustomerService,
    private reservationService: ReservationService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    // Create formGroup
    this.bookingModal = new FormGroup({
      first_name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      last_name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'
        ),
      ]),
      num_guests: new FormControl(),
    });
    // Get temp customer, reservation and room
    this.customer = this.tempValuesService.getCustomer();
    this.reservation = this.tempValuesService.getReservation();
    this.room = this.tempValuesService.getRoom();

    // Calculate Grand Total
    let days = this.calculateDays(
      this.reservation.startDate,
      this.reservation.endDate
    );
    this.grand_total = this.room.price * days;
  }

  calculateDays(start_date: string, end_date: string) {
    let fromDate = DateTime.fromISO(start_date);
    let toDate = DateTime.fromISO(end_date);
    let duration = toDate.diff(fromDate, 'days');
    return duration.days;
  }

  async onSubmit() {
    // Preparing customer to be saved in the db
    this.customer.firstName = this.bookingModal.value.first_name;
    this.customer.lastName = this.bookingModal.value.last_name;
    this.customer.email = this.bookingModal.value.email;
    this.customer.phoneNumber = this.bookingModal.value.phone;

    // Preparing reservation to be saved in the db
    this.reservation.roomId = this.room.roomId;
    console.log(this.customer);
    console.log(this.reservation);
    // Save customer to db
    await this.customerService.saveCustomer(this.customer).subscribe((res) => {
      this.reservation.customerId = res.customerId;
      console.log(res);
      this.reservationService
        .saveReservation(this.reservation)
        .subscribe({
          next: (result) => {
            this.notAvailable = false;
            // this.router.navigate(['/home']);
            console.log(result);
            this.modalReference = this.modalService.open( this.confirmationModal );
          },
          error: (err) => {
            this.notAvailable = true;
            this.modalReference = this.modalService.open( this.confirmationModal );
          }
        });
    });
  }

  close() {
    this.modalReference.close();
  }
}

