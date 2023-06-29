// static image
import destinationImage1 from '../assets/images/destination-1-1.png';
import destinationImage2 from '../assets/images/destination-2-1.png';
import destinationImage3 from '../assets/images/destination-3-1.png';
import sendIcon from '../assets/icons/navigation-destination-icon.svg';

interface IDestinationData {
  id: number;
  pathImage: string;
  alt: string;
  location: string;
  price: number;
  seedIcon: string;
  dayTrips: string;
}

export const DestinationData: IDestinationData[] = [
  {
    id: 1,
    pathImage: destinationImage1,
    alt: 'travel landing page destination image 1',
    location: 'Rome, Italty',
    price: 5.42,
    seedIcon: sendIcon,
    dayTrips: '10 Days Trip',
  },
  {
    id: 2,
    pathImage: destinationImage2,
    alt: 'travel landing page destination image 2',
    location: 'London, UK',
    price: 4.2,
    seedIcon: sendIcon,
    dayTrips: '12 Days Trip',
  },
  {
    id: 3,
    pathImage: destinationImage3,
    alt: 'travel landing page destination image 3',
    location: 'Full Europe',
    price: 15,
    seedIcon: sendIcon,
    dayTrips: '28 Days Trip',
  },
];
