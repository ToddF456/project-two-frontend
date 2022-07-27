import { Component, OnInit } from '@angular/core';
import { Room } from 'src/models/room';
import { ROOMS } from 'src/models/ROOMS';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css'],
})
export class BookingPageComponent implements OnInit {
  roomList: Room[] = ROOMS;

  constructor() {}

  ngOnInit(): void {}
}
