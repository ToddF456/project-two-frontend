import { Component, OnInit } from '@angular/core';
import { Room } from 'src/models/room';
import { TempValuesService } from 'src/app/services/temp-values.service';
import { RoomService } from 'src/app/services/room.service';
import { Reservation } from 'src/models/reservation';
import { Customer } from 'src/models/customer';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css'],
})
export class BookingPageComponent implements OnInit {
  roomList: Room[] = [];
  tempReservation: Reservation = this.tempValuesService.getReservation();
  tempCustomer: Customer = this.tempValuesService.getCustomer();

  constructor(
    private tempValuesService: TempValuesService,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.tempReservation.start_date =
      this.tempValuesService.getReservation().start_date;
    this.tempReservation.end_date =
      this.tempValuesService.getReservation().end_date;
    this.tempCustomer.numGuests =
      this.tempValuesService.getCustomer().numGuests;
    this.getRoomsByDates();
  }

  getAllRooms() {
    this.roomService.getAllRooms().subscribe((res) => (this.roomList = res));
  }

  getRoomsByDates() {
    this.roomService
      .getRoomsByDates(
        this.tempReservation.start_date,
        this.tempReservation.end_date,
        this.tempCustomer.numGuests
      )
      .subscribe((res) => {
        this.roomList = res;
        console.log(this.roomList);
        this.roomList.map((room) => {
          switch (room.type) {
            case 'Twin Penthouse Suite':
              room.img = '../../../assets/room_types/king-deluxe.jpg';
              break;
            case 'Full Premium Suite':
              room.img = '../../../assets/room_types/king-penthouse.jpg';
              break;
            case 'King Premium Suite':
              room.img = '../../../assets/room_types/king-premium.jpg';
              break;
            case 'Queen Presidential Suite':
              room.img = '../../../assets/room_types/king-presidential.jpg';
              break;
            case 'King Presidential Suite':
              room.img = '../../../assets/room_types/king-presidential.jpg';
              break;
            case 'King Penthouse Suite':
              room.img = '../../../assets/room_types/queen-deluxe.jpg';
              break;
            default:
              room.img = '../../../assets/room_types/queen-premium.jpg';
              break;
          }

          // if (room.type === 'Twin Penthouse Suite') {
          //   room.img = '../../../assets/room_types/king-deluxe.jpg';
          // } else if ((room.roomId = 1)) {
          //   room.img = '../../../assets/room_types/king-penthouse.jpg';
          // }
        });
      });
  }
}
