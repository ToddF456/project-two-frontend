import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Reservation } from 'src/models/reservation';
// import { RESERVATIONS } from 'src/models/RESERVATIONS';

@Component({
  selector: 'reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.css'],
})
export class ReservationsPageComponent implements OnInit {
  // reservationList: Reservation[] = RESERVATIONS;
  resForm: FormGroup = new FormGroup({});
  reservation_number: number = 0;
  reservation_firstName: string = '';
  reservation_lastName: string = '';

  constructor() {}

  ngOnInit(): void {
    this.resForm = new FormGroup({
      resNumber: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
      resFirstName: new FormControl(null, Validators.required),
      resLastName: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    // this.reservation_number = this.resForm.value.resNumber;
    // this.reservation_firstName = this.resForm.value.resFirstName;
    // this.reservation_lastName = this.resForm.value.resLastName;
  }
}
