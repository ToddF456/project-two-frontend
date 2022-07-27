import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/home-page/homepage.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { BookingModalComponent } from './components/booking-modal/booking-modal.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomepageComponent, BookingFormComponent, BookingPageComponent, BookingModalComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
