// static image
import bookingImage1 from '../assets/icons/destination-icon.svg';
import bookingImage2 from '../assets/icons/payment-icon.svg';
import bookingImage3 from '../assets/icons/reach-icon.svg';

interface IBookingData {
  id: number;
  pathImage: string;
  alt: string;
  title: string;
  content: string;
}

export const BookingData: IBookingData[] = [
  {
    id: 1,
    pathImage: bookingImage1,
    alt: 'travel landing page destionation icon',
    title: 'Choose Destination',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    id: 2,
    pathImage: bookingImage2,
    alt: 'travel landing page destionation icon',
    title: 'Make Payment',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
  {
    id: 3,
    pathImage: bookingImage3,
    alt: 'travel landing page destionation icon',
    title: 'Reach Airport on Selected Date',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
  },
];
