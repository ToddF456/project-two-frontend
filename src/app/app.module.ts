import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/home-page/homepage.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { BookingFinalComponent } from './components/booking-final/booking-final.component';
import { ReservationsPageComponent } from './components/reservations-page/reservations-page.component';
import { NoRoomsAvailComponent } from './components/no-rooms-avail/no-rooms-avail.component';
import { PhotoCarouselComponent } from './components/photo-carousel/photo-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    BookingFormComponent,
    BookingPageComponent,
    BookingFinalComponent,
    ReservationsPageComponent,
    NoRoomsAvailComponent,
    PhotoCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
