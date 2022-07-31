import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from 'src/models/reservation';
import { RESERVATIONS } from 'src/models/RESERVATIONS';

@Component({
  selector: 'reservations-modal',
  templateUrl: './reservations-modal.component.html',
  styleUrls: ['./reservations-modal.component.css'],
})
export class ReservationsModalComponent implements OnInit {
  reservationList: Reservation[] = RESERVATIONS;
  @Input()
  reservation_number: number = 0;
  @Input()
  reservation_firstName: string = '';
  @Input()
  reservation_lastName: string = '';

  constructor() {}

  ngOnInit(): void {}
}
