import { Room } from './room';

export const ROOMS: Room[] = [
  {
    id: 1,
    name: 'King Penthouse Suite',
    img: '../assets/room_types/king-penthouse.jpg',
    beds: '2 King Size Beds',
    price_per_night: 300,
    max_guests: 6,
  },
  {
    id: 2,
    name: 'King Presidential Suite',
    img: '../assets/room_types/king-presidential.jpg',
    beds: '2 King Size Beds',
    price_per_night: 280,
    max_guests: 6,
  },
  {
    id: 3,
    name: 'King Deluxe Suite',
    img: '../assets/room_types/king-deluxe.jpg',
    beds: '1 King Size Bed',
    price_per_night: 230,
    max_guests: 3,
  },
  {
    id: 4,
    name: 'Queen Deluxe Suite',
    img: '../assets/room_types/queen-deluxe.jpg',
    beds: '2 Queen Size Beds',
    price_per_night: 250,
    max_guests: 4,
  },
  {
    id: 5,
    name: 'King Premium Suite',
    img: '../assets/room_types/king-premium.jpg',
    beds: '1 King Size Bed',
    price_per_night: 180,
    max_guests: 3,
  },
  {
    id: 6,
    name: 'Queen Premium Suite',
    img: '../assets/room_types/queen-premium.jpg',
    beds: '2 Queen Size Beds',
    price_per_night: 200,
    max_guests: 4,
  },
];
