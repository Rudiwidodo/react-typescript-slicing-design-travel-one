import supportImage1 from '../assets/images/support-image-1.svg';
import supportImage2 from '../assets/images/support-image-2.svg';
import supportImage3 from '../assets/images/support-image-3.svg';
import supportImage4 from '../assets/images/support-image-4.svg';
import supportImage5 from '../assets/images/support-image-5.svg';

type SupportData = {
  id: number;
  pathImage: string;
};

export const supportData: SupportData[] = [
  {
    id: 1,
    pathImage: supportImage1,
  },
  {
    id: 2,
    pathImage: supportImage2,
  },
  {
    id: 3,
    pathImage: supportImage3,
  },
  {
    id: 4,
    pathImage: supportImage4,
  },
  {
    id: 5,
    pathImage: supportImage5,
  },
];
