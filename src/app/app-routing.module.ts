import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/home-page/homepage.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { ReservationsPageComponent } from './components/reservations-page/reservations-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomepageComponent },
  { path: 'booking', component: BookingPageComponent },
  { path: 'reservations', component: ReservationsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
