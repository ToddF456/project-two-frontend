import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from 'src/models/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  roomURL: string;

  constructor(private http: HttpClient) {
    this.roomURL = 'http://localhost:8080/rooms';
  }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomURL);
  }

  getRoomsByDates(
    start: string,
    end: string,
    numGuests: number
  ): Observable<Room[]> {
    return this.http.get<Room[]>(
      `${this.roomURL}/dates?startDate=${start}&endDate=${end}&numGuests=${numGuests}`
    );
  }
}
