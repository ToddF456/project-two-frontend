import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/models/reservation';
import { RESERVATIONS } from 'src/models/RESERVATIONS';

@Component({
  selector: 'reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.css'],
})
export class ReservationsPageComponent implements OnInit {
  reservationList: Reservation[] = RESERVATIONS;

  constructor() {}

  ngOnInit(): void {}
}
