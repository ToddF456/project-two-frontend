export interface Reservation {
  res_id: number;
  client_id: number;
  client_first_name: string;
  client_last_name: string;
  start_date: Date;
  end_date: Date;
  num_guests: number;
  room_type: string;
  price: number;
}
