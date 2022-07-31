import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/home-page/homepage.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { BookingModalComponent } from './components/booking-modal/booking-modal.component';
import { ReservationsPageComponent } from './components/reservations-page/reservations-page.component';
import { ReservationsModalComponent } from './components/reservations-modal/reservations-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    BookingFormComponent,
    BookingPageComponent,
    BookingModalComponent,
    ReservationsPageComponent,
    ReservationsModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
