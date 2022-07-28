import { Reservation } from './reservation';

export const RESERVATIONS: Reservation[] = [
  {
    res_id: 1,
    client_id: 1,
    client_first_name: 'John',
    client_last_name: 'Doe',
    start_date: new Date(),
    end_date: new Date(),
    num_guests: 2,
    room_type: 'King Premium Suite',
    price: 500,
  },
  {
    res_id: 2,
    client_id: 1,
    client_first_name: 'John',
    client_last_name: 'Doe',
    start_date: new Date(),
    end_date: new Date(),
    num_guests: 4,
    room_type: 'Queen Premium Suite',
    price: 400,
  },
  {
    res_id: 3,
    client_id: 1,
    client_first_name: 'John',
    client_last_name: 'Doe',
    start_date: new Date(),
    end_date: new Date(),
    num_guests: 5,
    room_type: 'King Penthouse Suite',
    price: 1000,
  },
];
