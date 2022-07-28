import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/models/reservation';
import { RESERVATIONS } from 'src/models/RESERVATIONS';

@Component({
  selector: 'reservations-modal',
  templateUrl: './reservations-modal.component.html',
  styleUrls: ['./reservations-modal.component.css'],
})
export class ReservationsModalComponent implements OnInit {
  reservationList: Reservation[] = RESERVATIONS;

  constructor() {}

  ngOnInit(): void {}
}
