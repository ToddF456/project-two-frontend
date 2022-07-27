import { Room } from './room';

export const ROOMS: Room[] = [
  {
    id: 1,
    type: '2 King Beds Penthouse Suite',
    img: '../assets/room_types/king-penthouse.jpg',
    price_per_night: 300,
    max_guests: 6,
  },
  {
    id: 2,
    type: '2 King Bed Presidential Suite',
    img: '../assets/room_types/king-presidential.jpg',
    price_per_night: 280,
    max_guests: 6,
  },
  {
    id: 3,
    type: '1 King Bed Deluxe Suite',
    img: '../assets/room_types/king-deluxe.jpg',
    price_per_night: 230,
    max_guests: 3,
  },
  {
    id: 4,
    type: '2 Queen Beds Deluxe Suite',
    img: '../assets/room_types/queen-deluxe.jpg',
    price_per_night: 250,
    max_guests: 4,
  },
  {
    id: 5,
    type: '1 King Bed Premium Suite',
    img: '../assets/room_types/king-premium.jpg',
    price_per_night: 180,
    max_guests: 3,
  },
  {
    id: 6,
    type: '2 Queen Beds Premium Suite',
    img: '../assets/room_types/queen-premium.jpg',
    price_per_night: 200,
    max_guests: 4,
  },
];
