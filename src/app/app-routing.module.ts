import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/home-page/homepage.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { BookingFinalComponent } from './components/booking-final/booking-final.component';
import { ReservationsPageComponent } from './components/reservations-page/reservations-page.component';
import { NoRoomsAvailComponent } from './components/no-rooms-avail/no-rooms-avail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomepageComponent },
  { path: 'booking', component: BookingPageComponent },
  { path: 'confirmation', component: BookingFinalComponent },
  { path: 'reservations', component: ReservationsPageComponent },
  { path: 'reservations/no-vacancy', component: NoRoomsAvailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
