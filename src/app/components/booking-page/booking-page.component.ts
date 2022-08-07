import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TempValuesService } from 'src/app/services/temp-values.service';
import { RoomService } from 'src/app/services/room.service';
import { Reservation } from 'src/models/reservation';
import { Customer } from 'src/models/customer';
import { Room } from 'src/models/room';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css'],
})
export class BookingPageComponent implements OnInit {
  roomList: Room[] = [];
  reservation!: Reservation;
  customer!: Customer;
  room!: Room;
  @Input() updatePage: Observable<void> = new Observable();
  notAvailable = false;

  constructor(
    private tempValuesService: TempValuesService,
    private roomService: RoomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reservation = this.tempValuesService.getReservation();
    this.customer = this.tempValuesService.getCustomer();
    this.room = this.tempValuesService.getRoom();
    this.getRoomsByDates();
    console.log(this.customer);
    console.log(this.reservation);
    this.updatePage.subscribe(() => this.getRoomsByDates());
  }

  getAllRooms() {
    this.roomService.getAllRooms().subscribe((res) => (this.roomList = res));
  }

  getRoomsByDates() {
    this.roomService
      .getRoomsByDates(
        this.reservation.startDate,
        this.reservation.endDate,
        this.customer.numGuests
      )
      .subscribe((res) => {
        this.roomList = res;
        if (this.roomList.length === 0) {
        //   this.router.navigate(['/reservations/no-vacancy']);
          this.notAvailable = true;
        } else { this.notAvailable = false; }
        this.roomList.map((room) => {
          // Getting all the images by room type
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
        });
      });
  }

  onSubmit(r: Room) {
    // Set temp room to selected room
    this.room = r;
    this.tempValuesService.setRoom(r);

    // Redirect to confirmation page:
    this.router.navigate(['/confirmation']);
  }
}
