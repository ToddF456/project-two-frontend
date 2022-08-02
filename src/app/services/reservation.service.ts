import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from 'src/models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  reservationURL: string;

  constructor(private http: HttpClient) {
    this.reservationURL = 'http://localhost:8080/reservations';
  }

  getReservationByConfirmationNum(
    confirmation: string
  ): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.reservationURL}/${confirmation}`);
  }

  saveReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.reservationURL, reservation);
  }

  updateReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(this.reservationURL, reservation);
  }

  deleteReservation(res: Reservation): Observable<Reservation> {
    return this.http.delete<Reservation>(
      `${this.reservationURL}/${res.reservationId}`
    );
  }
}
